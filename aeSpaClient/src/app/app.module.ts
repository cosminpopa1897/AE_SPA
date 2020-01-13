import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductAlertsComponent } from './products/product-alerts/product-alerts.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
