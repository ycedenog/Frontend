import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LibrosService } from 'src/app/Servicios/libros.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  
  arrayAutores:Array<any> = [];
  public page!:number;
  autor!:FormGroup;

  constructor(private service:LibrosService) { }

  ngOnInit(): void {
  }

  obtenerTodosAutores(){

  }

}
