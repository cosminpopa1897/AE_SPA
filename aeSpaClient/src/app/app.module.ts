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
import { CategoriesComponent } from './categories/categories.component';
import { StorePageComponent } from './store-page/store-page.component';
import { ProductsService } from './services/products/products.service';
import { DataService } from './services/data/data.service';
import { CategoriesService } from './services/categories/categories.service';
import { FormsModule } from "@angular/forms";
import { AdminComponent } from './admin/admin.component';
import { ProductsAdminComponent } from './admin/products-admin/products-admin.component';
import { CategoriesAdminComponent } from './admin/categories-admin/categories-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ShippingComponent,
    CategoriesComponent,
    StorePageComponent,
    AdminComponent,
    ProductsAdminComponent,
    CategoriesAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: StorePageComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'admin', component: AdminComponent },
    ])
  ],
  providers: [
    DataService,
    ProductsService,
    CategoriesService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
