import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteService } from 'src/app/Servicios/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  arrayClientes:Array<any> = [];
  public page!:number;

  constructor(private service:ClienteService) { }

  ngOnInit(): void {
  }

  obtenerClientes(){
    //this.service.obtenerClientesServer().subscribe(data => console.log(data));
    this.service.obtenerClientesServer().subscribe((data) => {
      this.arrayClientes = data;
    });
  }
}


