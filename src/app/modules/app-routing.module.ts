import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsPageComponent} from '../components/products-page/products-page.component';
import {CreatePageComponent} from '../components/create-page/create-page.component';

const routes: Routes = [
  {path: 'products', component: ProductsPageComponent},
  {path: 'create', component: CreatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
