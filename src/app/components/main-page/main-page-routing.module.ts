import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { InicioComponent } from './inicio/inicio.component';
import { MainPageComponent } from './main-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LibroautorComponent } from './books/libroautor/libroautor.component';
import { LibroeditorialComponent } from './books/libroeditorial/libroeditorial.component';

const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
    {path: 'inicio', component: InicioComponent},
    {path: 'books', component: BooksComponent},
    {path: 'shop', component: ShoppingComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'cliente', component: ClienteComponent },
    {path: 'libroautor', component: LibroautorComponent},
    {path: 'libroeditorial', component: LibroeditorialComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainPageRoutingModule { }
