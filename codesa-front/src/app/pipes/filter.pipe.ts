import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
   const resul = [];
   for(const usuarios of value){
     if(usuarios.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1){
       resul.push(usuarios);

     };
   };
   return resul ;
  }

}
