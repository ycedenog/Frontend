import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LibrosService } from 'src/app/Servicios/libros.service';

@Component({
  selector: 'app-libroautor',
  templateUrl: './libroautor.component.html',
  styleUrls: ['./libroautor.component.css']
})
export class LibroautorComponent implements OnInit {

  libroAutor!:FormGroup;
  arrayLibroAutor:Array<any> = [];
  public page!:number;

  constructor(private service:LibrosService) { }

  ngOnInit(): void {
    this.libroAutor = new FormGroup({
      nombre: new FormControl('',
      [
        Validators.maxLength(50)
      ]),
      apellido: new FormControl('',
      [
        Validators.maxLength(50)
      ]),
    });

  }

  obtenerLibroporAutor(){
    const {nombre, apellido } = this.libroAutor.value;
    this.service.obtenerLibroAutor(nombre, apellido).subscribe(data => this.arrayLibroAutor = data);
  }




}
