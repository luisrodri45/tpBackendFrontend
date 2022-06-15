import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/models/moneda';
import { Transaccion } from 'src/app/models/transaccion';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-punto2-b',
  templateUrl: './punto2-b.component.html',
  styleUrls: ['./punto2-b.component.css']
})
export class Punto2BComponent implements OnInit {
  transacciones!:Array<Transaccion>;
  transaccion!:Transaccion;
  origen!:string;
  destino!:string;
  codigos!:Array<Moneda>;
  moneda!:Moneda;
  constructor(private conversionService:ConversorService) { }

  ngOnInit(): void {
    this.obtenerTransacciones();
    this.getCodigos();
  }

  obtenerTransacciones(){
    this.transacciones = new Array<Transaccion>();
    this.conversionService.getTransacciones().subscribe(res=>{
      res.forEach((e:any) => {
        this.transaccion = new Transaccion();
        Object.assign(this.transaccion,e);
        this.transacciones.push(this.transaccion);
      });
    },
    error=>{
      console.log("Un error se producio: "+error); 
    })
  }
  filtrarMoneda(){
    this.transacciones = new Array<Transaccion>();
    this.conversionService.getTransaccionesOrigenDestino(this.origen,this.destino).subscribe(res=>{
      res.forEach((e:any) => {
        this.transaccion = new Transaccion();
        Object.assign(this.transaccion,e);
        this.transacciones.push(this.transaccion);
      });
    },
    error=>{
      console.log("Un error se producio: "+error); 
    })
  }
  getCodigos(){
    this.codigos = new Array<Moneda>();
    this.conversionService.getCodes().subscribe(res=>{
      let b = Object.values(res.response.fiats);
      b.forEach((e:any)=>{
        if(e.currency_code=='ARS' || e.currency_code=='USD' || e.currency_code=='EUR' || e.currency_code=='GBP' ||
        e.currency_code=='JPY' || e.currency_code=='CNY' || e.currency_code=='AUD' || e.currency_code=='BTC'){
          this.moneda = new Moneda();
          this.moneda.codigo = e.currency_code;
          this.moneda.nombre = e.currency_name;
          this.codigos.push(this.moneda);
        }
      })
    },
    error=>{
      console.log("Un error se producio: "+error); 
    })
  }
}
