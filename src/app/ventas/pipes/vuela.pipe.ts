import { Pipe, PipeTransform } from "@angular/core";

//Nombre de pipe para poder ser usado
@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{
    //Transforma un valor deseado en otro valor, no altera la propiedad eviada.
    transform( value: boolean ): string {
        return ( value ) ? 'vuela' : 'no vuela'
    }
}