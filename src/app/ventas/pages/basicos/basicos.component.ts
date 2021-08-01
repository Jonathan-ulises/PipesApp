import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower     : string = 'jonathan';
  nombreUpper     : string = 'JONATHAN';
  nombreCompleto  : string = 'JoNAthAn ULiseS';

  fecha: Date = new Date(); //El dia de hoy

}
