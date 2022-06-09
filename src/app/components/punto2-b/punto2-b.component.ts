import { Component, OnInit } from '@angular/core';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-punto2-b',
  templateUrl: './punto2-b.component.html',
  styleUrls: ['./punto2-b.component.css']
})
export class Punto2BComponent implements OnInit {

  constructor(private conversionService:ConversorService) { }

  ngOnInit(): void {
    this.obtenerTransacciones();
  }

  obtenerTransacciones(){
    this.conversionService.getTransacciones().subscribe(res=>{
      console.log(res);
    })
  }
}
