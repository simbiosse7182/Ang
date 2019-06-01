import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './modules/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './modules/material.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ProductsPageComponent} from './components/products-page/products-page.component';
import {CreatePageComponent} from './components/create-page/create-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsPageComponent,
    CreatePageComponent,
    ProductFormComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
