import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-punto1-form',
  templateUrl: './punto1-form.component.html',
  styleUrls: ['./punto1-form.component.css']
})
export class Punto1FormComponent implements OnInit {
  libro!:Libro;
  aux!:string;
  constructor(private libroService:LibroService,private router:Router) { 
    this.libro = new Libro();
    this.libro.destacado = false;
  }

  ngOnInit(): void {
  }

  agregarLibro(){
    console.log("aaa");
    /* console.log(this.descripcion);
    console.log(this.destacado);
    console.log(this.aux);
    console.log(this.stock);
    console.log(this.titulo); */
    /* this.libro.descripcion = this.descripcion;
    this.libro.destacado = this.destacado; */
    this.libro.imagen = this.aux;
    /* this.libro.stock = this.stock;
    this.libro.titulo = this.titulo; */
    console.log(this.libro);
    this.libroService.altaLibro(this.libro).subscribe();
    console.log("bbb");
    this.libro = new Libro();
    this.libro.destacado = false;
    this.router.navigate(["punto1"]);
  }

  onFileChanges(files:any){
    console.log("File has changed:", files);
    this.aux = files[0].base64;
  }
}
