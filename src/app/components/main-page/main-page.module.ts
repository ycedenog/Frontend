import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './main-page.component';
import { BooksComponent } from './books/books.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProfileComponent } from './profile/profile.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegistroComponent } from './books/registro/registro.component';
import { LibroautorComponent } from './books/libroautor/libroautor.component';
import { LibroeditorialComponent } from './books/libroeditorial/libroeditorial.component';
import { AutorComponent } from './books/autor/autor.component';


@NgModule({
  declarations: [
    MainPageComponent,
    BooksComponent,
    NavbarComponent,
    ShoppingComponent,
    InicioComponent,
    ProfileComponent,
    ClienteComponent,
    RegistroComponent,
    LibroautorComponent,
    LibroeditorialComponent,
    AutorComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule,
    NgxPaginationModule,
  ]
})
export class MainPageModule { }
