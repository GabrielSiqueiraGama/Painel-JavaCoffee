import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria',
  standalone: true
})
export class CategoriaPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case "Bebida": return 'coffee'
      case 'Lanche': return 'lunch_dining'
      case 'Duplo': return 'dining'
    }
    return 'dining';
  }

}
