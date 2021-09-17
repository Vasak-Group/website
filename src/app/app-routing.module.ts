import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { PrivacidadComponent } from './sections/privacidad/privacidad.component';
import { ProductsComponent } from './sections/products/products.component';

const routes: Routes = [
  { path: 'privacidad', component: PrivacidadComponent },
  { path: 'productos', component: ProductsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
