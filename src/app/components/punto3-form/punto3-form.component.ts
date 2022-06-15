import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona';
import { PasajeService } from 'src/app/services/pasaje.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-punto3-form',
  templateUrl: './punto3-form.component.html',
  styleUrls: ['./punto3-form.component.css']
})
export class Punto3FormComponent implements OnInit {
  personas!:Array<Persona>;
  persona!:Persona;
  pasaje!:Pasaje;
  accion!:string;
  constructor(private personaService:PersonaService,private pasajeService:PasajeService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.pasaje = new Pasaje();
      if (params['id'] == "0" || !params['id']){
        this.accion = "new";
      }else{
        this.accion="update";
        this.pasaje.precioPasaje = 0;
        this.cargarPasaje(params['id']);
      }
      this.obtenerPersonas()
    });
  }

  obtenerPersonas(){
    this.personas = new Array<Persona>();
    this.personaService.getPersonas().subscribe(res=>{
      res.forEach((e:any) => {
        this.persona = new Persona();
        Object.assign(this.persona,e);
        this.personas.push(this.persona);
      });
    },
    error=>{
      console.log("Un error se producio: "+error); 
    })
  }

  agregarPasaje(){
    if(this.pasaje.categoriaPasajero!=undefined && this.pasaje.pasajero!=undefined && this.pasaje.precioPasaje!=undefined){
      this.pasaje.fechaCompra = new Date();
      this.pasaje.precioTotal = this.determinarDescuento(this.pasaje.categoriaPasajero);
      this.pasajeService.addPasaje(this.pasaje).subscribe();
      this.router.navigate(["punto3"]);
    } 
  }

  cargarPasaje(id:string){
    this.pasajeService.getPasaje(id).subscribe(res=>{
      this.pasaje = new Pasaje();
      this.pasaje = res;
    },
    error=>{
      console.log("Un error se producio: "+error); 
    });
  }

  actualizarPasaje(){
    if(this.pasaje.categoriaPasajero!=undefined && this.pasaje.pasajero!=undefined && this.pasaje.precioPasaje!=undefined){
      this.pasaje.precioTotal = this.determinarDescuento(this.pasaje.categoriaPasajero);
      this.pasajeService.updatePasaje(this.pasaje).subscribe();
      this.router.navigate(["punto3"]);
    } 
  }

  determinarDescuento(categoria:string):number{
    if(categoria=="a"){
      return this.pasaje.precioPasaje;
    }else if(categoria=="j"){
      return this.pasaje.precioPasaje - this.pasaje.precioPasaje*0.50;
    }else if(categoria=="m"){
      return this.pasaje.precioPasaje - this.pasaje.precioPasaje*0.25;
    }
    return 0;
  }
}
