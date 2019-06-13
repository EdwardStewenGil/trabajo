import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtconcepto'
})
export class FiltconceptoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
 
    const resultConcepto = [];
    for (const Concepto of value) {
      if (Concepto.id_concepto.toLowerCase().indexOf(arg) > -1) {
        resultConcepto.push(Concepto)      };
    };
    return resultConcepto;
  }


}
