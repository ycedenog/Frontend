import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/Servicios/cliente/cliente.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  arrayCliente:Array<any> = [];
  identificador!:FormGroup;
  public page!:number;

  constructor(private service:ClienteService) { }

  ngOnInit(): void {
    this.identificador = new FormGroup({
      id: new FormControl('',
      [
        Validators.maxLength(10)
      ]),
    });
  }

  obtenerClientesconPrest(){
    const cliente = this.identificador.value;
    this.service.obtenerClientesconPrestamo(cliente.id).subscribe(data => {
      this.arrayCliente = data;
    })
  }

}
