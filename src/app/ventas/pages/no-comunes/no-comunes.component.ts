import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'F';

  /*
  Mapa de valores para el pipe i18nSelect
  */
  invitacionMapa = {
    'M': 'invitarlo',
    'F': 'Invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un ningun cliente esperando.',
    '=2': 'tenemos dos ningun cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }
}
