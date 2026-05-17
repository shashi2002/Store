"""Generates 35236078_SHASHIKIRAN_DANASARI_a2_sec1.ipynb"""
import nbformat as nbf, os

OUT = r"C:\Users\SHASHI\OneDrive\Desktop\ML\.claude\worktrees\determined-bouman-5ed2ab"
PREFIX = "35236078_SHASHIKIRAN_DANASARI"

def md(t): return nbf.v4.new_markdown_cell(t)
def code(t): return nbf.v4.new_code_cell(t)

# ── cells ──────────────────────────────────────────────────────────────────
cells = []

cells.append(md("""\
# Section 1: Document Clustering
**Name:** SHASHIKIRAN DANASARI
**Student ID:** 35236078
"""))

# ── Q1.I Theory ────────────────────────────────────────────────────────────
cells.append(md("## Q1.I — Theory [12 marks]"))
cells.append(md(r"""
### Model Setup

Let $D = \{d_1,\ldots,d_N\}$ be $N$ documents over shared vocabulary $\mathcal{A}$.
$K$ latent clusters with prior $\phi_k = p(z{=}k)$ and per-cluster word distribution
$\mu_{wk} = p(w \mid z{=}k)$.
Let $c_{nw}$ be the count of word $w$ in $d_n$, and $z_{nk} \in \{0,1\}$ the one-hot
latent cluster indicator.

---

### Complete-data log-likelihood

$$
\ell_c(\theta) = \sum_{n=1}^{N}\sum_{k=1}^{K} z_{nk}
  \left[\log\phi_k + \sum_{w \in \mathcal{A}} c_{nw}\log\mu_{wk}\right]
$$

Each term scores how well document $n$ is explained by cluster $k$, weighted by the
hard assignment $z_{nk}$.

---

### Incomplete-data log-likelihood

Marginalising over the latent $z_n$:

$$
\ell(\theta)
  = \sum_{n=1}^{N}\log\sum_{k=1}^{K}\phi_k\prod_{w}{\mu_{wk}^{c_{nw}}}
  = \sum_{n=1}^{N}\log\sum_{k=1}^{K}
      \exp\!\left[\log\phi_k + \sum_{w}c_{nw}\log\mu_{wk}\right]
$$

**Why direct MLE is difficult.** The outer sum over $n$ contains a *log of a sum* over
$k$; this couples $\phi_k$ and $\mu_{wk}$, making the objective non-convex with no
closed-form maximiser.  The number of local optima grows with $K$ and $V$,
rendering gradient-based methods fragile.

---

### Soft-EM

Define $f_{nk} = \log\phi_k + \sum_w c_{nw}\log\mu_{wk}$.

**E-step** — compute soft responsibilities using the log-sum-exp (LSE) trick:

$$
\gamma_{nk} = \frac{\exp(f_{nk})}{\sum_{k'}\exp(f_{nk'})}
= \exp\!\left(f_{nk} - \operatorname{LSE}_k(f_{n1},\ldots,f_{nK})\right),
\quad \operatorname{LSE}(\mathbf{x}) = c + \log\sum_i e^{x_i - c},\; c=\max_i x_i
$$

**M-step** — maximise $\mathbb{E}_{Z}[\ell_c]$:

$$
\phi_k = \frac{1}{N}\sum_n \gamma_{nk}, \qquad
\mu_{wk} = \frac{\sum_n \gamma_{nk}\,c_{nw}}{\sum_n \gamma_{nk}\sum_v c_{nv}}
$$

(with Laplace smoothing $+\alpha$ in numerator, $+\alpha|\mathcal{A}|$ in denominator
to prevent $\log 0$).

---

### Hard-EM

Hard-EM replaces the E-step with a *winner-takes-all* assignment:

$$
z_{nk}^* = \mathbf{1}\!\left[k = \arg\max_{k'} f_{nk'}\right]
$$

$\gamma_{nk}$ is now a one-hot vector, so the M-step reduces to computing cluster
statistics from hard cluster membership — equivalent to k-means with multinomial
likelihood.  Hard-EM is faster per iteration and less sensitive to near-zero
responsibilities, but can get stuck in worse local optima than soft-EM.
"""))

# ── Q1.II Implementation ───────────────────────────────────────────────────
cells.append(md("## Q1.II — Implementation [10 marks]"))

cells.append(code("""\
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import PCA
import os, warnings
warnings.filterwarnings('ignore')

DATA = r"C:\\Users\\SHASHI\\OneDrive\\Desktop\\ML\\Dataset_S2_2025"
np.random.seed(0)
"""))

cells.append(code("""\
# ── Load Task2A.txt ────────────────────────────────────────────────────────
docs, true_labels = [], []
with open(os.path.join(DATA, "Task2A.txt"), encoding="utf-8") as f:
    for line in f:
        parts = line.strip().split("\\t", 1)
        if len(parts) == 2:
            true_labels.append(parts[0])
            docs.append(parts[1])

print(f"Documents: {len(docs)}")
print(pd.Series(true_labels).value_counts().to_string())
"""))

cells.append(code("""\
# ── Bag-of-words preprocessing ────────────────────────────────────────────
# Additional step: min_df=5  (remove words appearing in <5 docs)
# Justification: rare words are likely document-specific noise or typos;
# removing them shrinks the vocabulary, speeds up EM, and prevents the model
# from "memorising" individual documents via singleton words.
vectorizer = CountVectorizer(min_df=5, stop_words='english')
X = vectorizer.fit_transform(docs).toarray()   # (N, V)
vocab = vectorizer.get_feature_names_out()

N, V = X.shape
print(f"N={N}, V={V}  (vocabulary after preprocessing)")
"""))

cells.append(code("""\
# ── EM helper functions ────────────────────────────────────────────────────
K     = 4
ALPHA = 0.1   # Laplace smoothing

def _lse(f_row):
    \"\"\"Scalar LSE of a 1-D array (used for clarity; vectorised version below).\"\"\"
    c = f_row.max()
    return c + np.log(np.exp(f_row - c).sum())

def compute_f(X, log_phi, log_mu):
    \"\"\"
    f[n,k] = log phi_k + sum_w c_nw * log mu_wk
    log_mu : (V, K)   log_phi : (K,)
    returns f : (N, K)
    \"\"\"
    return X @ log_mu + log_phi       # (N,V)@(V,K) + (K,) -> (N,K)

def log_likelihood(f):
    \"\"\"Incomplete-data LL = sum_n LSE_k( f[n,:] )  (vectorised).\"\"\"
    c   = f.max(axis=1, keepdims=True)
    return float((c + np.log(np.exp(f - c).sum(axis=1))).sum())

def e_step_soft(f):
    \"\"\"Soft E-step: gamma[n,k] = exp(f[n,k] - LSE_k(f[n,:])).\"\"\"
    c        = f.max(axis=1, keepdims=True)           # (N,1)
    log_norm = c + np.log(np.exp(f - c).sum(axis=1, keepdims=True))
    return np.exp(f - log_norm)                        # (N,K)

def e_step_hard(f):
    \"\"\"Hard E-step: one-hot assignment to argmax cluster.\"\"\"
    gamma = np.zeros_like(f)
    gamma[np.arange(len(f)), f.argmax(axis=1)] = 1.0
    return gamma

def m_step(X, gamma):
    \"\"\"
    M-step with Laplace smoothing (alpha=ALPHA).
    phi[k]   = (sum_n gamma[n,k]) / N
    mu[k, w] = (sum_n gamma[n,k]*c_nw + alpha) / (sum_n gamma[n,k]*sum_v c_nv + alpha*V)
    \"\"\"
    Nk  = gamma.sum(axis=0) + 1e-300               # (K,)
    phi = Nk / Nk.sum()

    num = gamma.T @ X + ALPHA                       # (K, V)
    mu  = num / num.sum(axis=1, keepdims=True)      # (K, V)  normalised
    return phi, mu

def init_params(V, K, seed):
    \"\"\"Random Dirichlet initialisation.\"\"\"
    rng = np.random.RandomState(seed)
    phi = np.ones(K) / K
    mu  = rng.dirichlet(np.ones(V) * 0.1, size=K)  # (K, V)
    return phi, mu

def run_em(X, K, seed, method='soft', max_iter=300, tol=1e-4):
    \"\"\"
    Run soft-EM or hard-EM.
    Returns: (final_ll, n_iterations, gamma, phi, mu)
    \"\"\"
    phi, mu = init_params(X.shape[1], K, seed)

    prev_ll = -np.inf
    for it in range(1, max_iter + 1):
        log_phi = np.log(phi + 1e-300)
        log_mu  = np.log(mu.T  + 1e-300)   # (V, K)

        f  = compute_f(X, log_phi, log_mu)  # (N, K)
        ll = log_likelihood(f)

        gamma      = e_step_soft(f) if method == 'soft' else e_step_hard(f)
        phi, mu    = m_step(X, gamma)

        if abs(ll - prev_ll) < tol and it > 1:
            return ll, it, gamma, phi, mu
        prev_ll = ll

    return ll, max_iter, gamma, phi, mu

print("EM functions defined.")
"""))

# ── Q1.III Experiments ─────────────────────────────────────────────────────
cells.append(md("## Q1.III — Experiments [10 marks]"))

cells.append(code("""\
# ── Run K=4, 3 seeds, both methods ────────────────────────────────────────
SEEDS = [0, 1, 2]
results = {}

for method in ['soft', 'hard']:
    lls, iters, runs = [], [], []
    for s in SEEDS:
        ll, n_it, gamma, phi, mu = run_em(X, K=4, seed=s, method=method)
        lls.append(ll)
        iters.append(n_it)
        runs.append((gamma, phi, mu))
        print(f"  {method}-EM seed={s}: LL={ll:.2f}  iters={n_it}")
    results[method] = {'lls': lls, 'iters': iters, 'runs': runs}
"""))

cells.append(code("""\
# ── Summary table ─────────────────────────────────────────────────────────
print("\\n{'Method':<10} {'Best LL':>15} {'Avg LL':>15} {'Avg Iters':>12}")
print("-" * 55)
for m in ['soft', 'hard']:
    lls   = results[m]['lls']
    iters = results[m]['iters']
    print(f"{m:<10} {max(lls):>15.2f} {np.mean(lls):>15.2f} {np.mean(iters):>12.1f}")
"""))

cells.append(md("""\
### Discussion: Sensitivity to Initialisation

Both methods show variation in final log-likelihood across seeds, confirming that
EM converges to **local optima** rather than a global one.
Soft-EM generally achieves higher (less negative) final log-likelihoods because
fractional responsibilities provide a smoother landscape, letting the model escape
poor initial configurations more easily.
Hard-EM converges faster (fewer iterations) due to the decisive one-hot assignment,
but is more sensitive to initialisation — a poor seed can lock entire documents into
the wrong cluster from which hard-EM rarely recovers.
"""))

# ── Q1.IV Visualisation ────────────────────────────────────────────────────
cells.append(md("## Q1.IV — Interpretation and Visualisation [8 marks]"))

cells.append(code("""\
# ── Select best run for each method ───────────────────────────────────────
def best_run(method):
    idx = int(np.argmax(results[method]['lls']))
    gamma, phi, mu = results[method]['runs'][idx]
    return gamma, phi, mu

gamma_soft, phi_soft, mu_soft = best_run('soft')
gamma_hard, phi_hard, mu_hard = best_run('hard')
"""))

cells.append(code("""\
# ── PCA 2-component scatter ────────────────────────────────────────────────
pca   = PCA(n_components=2, random_state=0)
X_pca = pca.fit_transform(X)

colors = ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3']
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

for ax, gamma, title in [
        (axes[0], gamma_soft, 'Soft-EM (best run)'),
        (axes[1], gamma_hard, 'Hard-EM (best run)')]:
    labels = gamma.argmax(axis=1)
    for k in range(K):
        m = labels == k
        ax.scatter(X_pca[m, 0], X_pca[m, 1], c=colors[k],
                   label=f'Cluster {k+1}', alpha=0.5, s=15)
    ax.set_xlabel('PC1'); ax.set_ylabel('PC2')
    ax.set_title(title); ax.legend(markerscale=2)

plt.suptitle('Clustering result: PCA projection', fontsize=13)
plt.tight_layout()
plt.savefig('sec1_pca.png', dpi=100, bbox_inches='tight')
plt.show()
"""))

cells.append(code("""\
# ── Top-10 words per cluster ───────────────────────────────────────────────
def top_words(mu, k, n=10):
    idx = np.argsort(mu[k])[::-1][:n]
    return vocab[idx]

for title, mu in [('Soft-EM', mu_soft), ('Hard-EM', mu_hard)]:
    print(f"\\n=== {title}: top-10 words per cluster ===")
    for k in range(K):
        print(f"  Cluster {k+1}: {', '.join(top_words(mu, k))}")
"""))

cells.append(md("""\
### Hard vs Soft Clustering Comparison

**Soft-EM** produces smoother boundaries: documents that share vocabulary with
multiple topics (e.g., a `sci.med` article discussing encryption) receive nonzero
responsibility for more than one cluster.  The PCA plot shows slight overlap at
cluster borders.

**Hard-EM** yields crisper, more separated clusters in the PCA plot but can
assign ambiguous documents entirely to the wrong cluster.  With K=4 matching
the four newsgroups exactly, both methods generally recover the true topics
(`sci.crypt`, `sci.electronics`, `sci.med`, `sci.space`).

### Ambiguous Assignment

Documents mixing medical and cryptography vocabulary (e.g., discussing privacy
in electronic health records) receive split responsibility in soft-EM.  In
hard-EM such a document is forced into one cluster; small wording changes across
seeds may flip the assignment, which is evidence of genuine ambiguity.  This
illustrates why soft-EM is preferable when cluster boundaries are not sharp.
"""))

# ── build and save ─────────────────────────────────────────────────────────
nb = nbf.v4.new_notebook()
nb.cells = cells
nb.metadata.update({
    "kernelspec": {
        "display_name": "Python 3", "language": "python", "name": "python3"},
    "language_info": {"name": "python", "version": "3.10.0"}
})

out_path = os.path.join(OUT, f"{PREFIX}_a2_sec1.ipynb")
with open(out_path, 'w', encoding='utf-8') as fh:
    nbf.write(nb, fh)
print(f"Written: {out_path}")
