import { Pipe, PipeTransform } from "@angular/core";

//Nombre de pipe
@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    //Metodo para transformar el valor deseado a un nuevo valor, no altera
    //el atributo original.
    transform( valor: string, enMayusculas: boolean = true): string {

        // if( enMayusculas ) {
        //     return valor.toUpperCase();
        // } else {
        //     return valor.toLocaleLowerCase();
        // }

        return ( enMayusculas ) ? valor.toUpperCase() : valor.toLocaleLowerCase();
        
    }
}  