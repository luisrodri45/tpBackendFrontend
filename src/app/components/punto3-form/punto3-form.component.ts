import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-punto3-form',
  templateUrl: './punto3-form.component.html',
  styleUrls: ['./punto3-form.component.css']
})
export class Punto3FormComponent implements OnInit {
  personas!:Array<Persona>;
  persona!:Persona;
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.obtenerPersonas()
  }

  obtenerPersonas(){
    this.personas = new Array<Persona>();
    this.personaService.getPersonas().subscribe(res=>{
      res.forEach((e:any) => {
        this.persona = new Persona();
        Object.assign(this.persona,e);
        this.personas.push(this.persona);
      });
      console.log(this.personas);
    })
  }
}
