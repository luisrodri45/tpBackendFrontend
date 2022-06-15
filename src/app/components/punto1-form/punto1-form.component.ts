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
  bandera:boolean = false;
  constructor(private libroService:LibroService,private router:Router) { 
    this.libro = new Libro();
    this.libro.destacado = false;
  }

  ngOnInit(): void {
  }

  agregarLibro(){
    if(this.libro.titulo!=undefined && this.libro.descripcion!=undefined && (this.aux!=undefined || this.libro.imagen!=undefined) && this.libro.stock!=undefined){
      if(this.bandera){
        this.libro.imagen = this.aux;
      }
      this.libroService.altaLibro(this.libro).subscribe();
      this.router.navigate(["punto1"]);
    }
  }

  onFileChanges(files:any){
    console.log("File has changed:", files);
    this.aux = files[0].base64;
  }

  determinarMetodo(met:string){
    if(met=="a"){
      this.bandera = true;
      this.libro.imagen = "";
    }else{
      this.bandera = false;
      this.aux = "";
      this.libro.imagen = "";
    }
  }
}
