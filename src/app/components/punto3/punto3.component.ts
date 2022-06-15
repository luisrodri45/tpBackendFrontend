import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  pasajes!:Array<Pasaje>;
  pasaje!:Pasaje;
  categoria!:string;

  constructor(private pasajeService:PasajeService, private router:Router) { }

  ngOnInit(): void {
    this.cargarPasajes();
  }

  cargarPasajes(){
    this.pasajes = new Array<Pasaje>();
    this.pasajeService.getPasajes().subscribe(res=>{
      res.forEach((e:any) => {
        this.pasaje = new Pasaje();
        Object.assign(this.pasaje,e);
        this.pasajes.push(this.pasaje);
      });
    },
    error=>{
      console.log("Un error se producio: "+error); 
    });
  }
  filtrarCategoria(categoria:string){
    this.pasajes = new Array<Pasaje>();
    this.pasajeService.getPasajesCategoria(categoria).subscribe(res=>{
      res.forEach((e:any) => {
        this.pasaje = new Pasaje();
        Object.assign(this.pasaje,e);
        this.pasajes.push(this.pasaje);
      });
    },
    error=>{
      console.log("Un error se producio: "+error); 
    })
  }
  borrarPasaje(id:string){
    this.pasajeService.deletePasaje(id).subscribe();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['punto3'])
  }
  actualizarPasaje(pasaje:Pasaje){
    this.router.navigate(['punto3-form/editar',pasaje._id]);
  }
}
