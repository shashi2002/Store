import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Mycomponent/nav-bar/nav-bar.component';
import { AboutComponent } from './Mycomponent/about/about.component';
import { CarouselComponent } from './Mycomponent/carousel/carousel.component';
import { CartComponent } from './Mycomponent/cart/cart.component';
import { FooterComponent } from './Mycomponent/footer/footer.component';
import { NewInComponent } from './Mycomponent/new-in/new-in.component';
import { ProductComponent } from './Mycomponent/product/product.component';
import { ProductItemComponent } from './Mycomponent/product-item/product-item.component';
import { ShowProductComponent } from './Mycomponent/show-product/show-product.component';
import { ProductDataTransferService } from './product-data-transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    CarouselComponent,
    CartComponent,
    FooterComponent,
    NewInComponent,
    ProductComponent,
    ProductItemComponent,
    ShowProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductDataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
