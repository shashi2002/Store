import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Mycomponent/product/product.component';
import { NavBarComponent } from './Mycomponent/nav-bar/nav-bar.component';
import { ProductItemComponent } from './Mycomponent/product-item/product-item.component';
import { CarouselComponent } from './Mycomponent/carousel/carousel.component';
import { FooterComponent } from './Mycomponent/footer/footer.component';
import { NewInComponent } from './Mycomponent/new-in/new-in.component';
import { AboutComponent } from './Mycomponent/about/about.component';
import { ShowProductComponent } from './Mycomponent/show-product/show-product.component';
import { CartComponent } from './Mycomponent/cart/cart.component';

const routes: Routes = [
  {path:'', component:CarouselComponent},
  {path:'product/:type', component: ProductComponent},
  {path:'newIn',component: NewInComponent},
  {path:'about',component: AboutComponent},
  {path:'cart',component: CartComponent},
  {path:'product/:type/:item', component: ShowProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
