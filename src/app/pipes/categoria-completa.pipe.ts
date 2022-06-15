import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoriaCompleta'
})
export class CategoriaCompletaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value=='a'){
      return "Adulto";
    }else if(value=='m'){
      return "Menor";
    }else if(value=="j"){
      return "Jubilado";
    }
    return null;
  }

}
