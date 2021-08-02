import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  upperLower: boolean = false;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.AZUL
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.NEGRO
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.VERDE
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.ROJO
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.VERDE
    }
  ]

  changeUpperLower(): void {
    this.upperLower = !this.upperLower;
  }


}
