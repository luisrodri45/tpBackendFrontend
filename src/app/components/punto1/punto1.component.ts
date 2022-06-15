import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  libros!:Array<Libro>;
  libro!:Libro;
  constructor(private libroService:LibroService) { }

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros(){
    this.libros = new Array<Libro>();
    this.libroService.getLibros().subscribe(res =>{
      res.forEach((e:any) => {
        this.libro = new Libro();
        Object.assign(this.libro,e);
        this.libros.push(this.libro);
      });
    },
    error=>{
      console.log("Un error se producio: "+error); 
    })
  }
}
