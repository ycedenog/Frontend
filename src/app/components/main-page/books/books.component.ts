import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LibrosService } from 'src/app/Servicios/libros.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  arrayLibros:Array<any> = [];
  public page!:number;

  constructor(private service:LibrosService) { }

  ngOnInit(): void {

  }

  obtenerTodosLibros(){
    this.service.obtenerLibros().subscribe((data) => {
      this.arrayLibros = data;
      console.log(this.arrayLibros);
    });
  }
  
  obtenerLibroporEditorial(){

  }



}


