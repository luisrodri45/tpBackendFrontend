import { Component, OnInit } from '@angular/core';
import { Moneda } from 'src/app/models/moneda';
import { Transaccion } from 'src/app/models/transaccion';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  codigos!:Array<Moneda>;
  tengo!:string;
  quiero!:string;
  cantidad!:string;
  conversionFinal!:string;
  moneda!:Moneda;
  transaccion!:Transaccion;
  constructor(private conversorService:ConversorService) { }

  ngOnInit(): void {
    this.getCodigos();
  }

  getCodigos(){
    this.codigos = new Array<Moneda>();
    this.conversorService.getCodes().subscribe(res=>{
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
    })
  }
  getConversion(){
    if(this.tengo!=undefined && this.quiero!=undefined && this.cantidad!=undefined){
      this.conversorService.getConversion(this.tengo,this.quiero,this.cantidad).subscribe(res=>{
        this.conversionFinal = res.new_amount;
        this.transaccion = new Transaccion();
        this.transaccion.monedaOrigen = this.tengo;
        this.transaccion.monedaDestino = this.quiero
        this.transaccion.cantidadOrigen =  Number(this.cantidad);
        this.transaccion.cantidadDestino = Number(this.conversionFinal);
        this.transaccion.tasaConversion = Number(this.cantidad);
        this.transaccion.emailCliente = "luisedurodriguez2014@gmail.com"
        this.altaTransaccion(this.transaccion);
      },
      error=>{
        console.log("Un error se producio: "+error); 
      })
    }
  }
  altaTransaccion(transaccion:Transaccion){
    this.conversorService.postTransacccion(transaccion).subscribe();
  }
}
