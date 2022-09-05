import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LibrosService } from 'src/app/Servicios/libros.service';

@Component({
  selector: 'app-libroeditorial',
  templateUrl: './libroeditorial.component.html',
  styleUrls: ['./libroeditorial.component.css']
})
export class LibroeditorialComponent implements OnInit {

  libroEditorial!:FormGroup;
  arrayLibroEditorial:Array<any> = [];
  public page!:number;

  constructor(private service:LibrosService) { }

  ngOnInit(): void {
    this.libroEditorial = new FormGroup({
      editorial: new FormControl('',
      [
        Validators.maxLength(5)
      ]),
    });
  }

  obtenerLibroporEditorial(){
    const editor = this.libroEditorial.value;
    console.log(editor);
    this.service.obtenerLibroEditorial(editor.editorial).subscribe(data => {
      this.arrayLibroEditorial = data;
    })
  }

}
