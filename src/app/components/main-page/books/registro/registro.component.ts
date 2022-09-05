import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LibrosService } from 'src/app/Servicios/libros.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  libro!:FormGroup;
  arrayBook:Array<any> = [];

  constructor(private service:LibrosService) { }

  ngOnInit(): void {

    this.libro = new FormGroup({
      titulo: new FormControl('',
      [
        Validators.maxLength(50)
      ]),
      ISBN: new FormControl('',
      [
        Validators.maxLength(50)
      ]),
      genero: new FormControl('',
      [
        Validators.maxLength(50)
      ]),
      anio: new FormControl('',
      [
        Validators.maxLength(50)
      ]),
      precio: new FormControl('',
      [
        Validators.maxLength(50)
      ]),
      autor: new FormControl('',
      [
        Validators.maxLength(50)
      ]),
      editorial: new FormControl('',
      [
        Validators.maxLength(50)
      ]),

    })
  }

  registrar(){
    const {titulo, ISBN, genero, anio, precio, autor, editorial} = this.libro.value;
    this.service.registrarLibro(titulo, ISBN, genero, anio, precio, autor, editorial).subscribe(data => {
      console.log(data);
    })
  }

}
