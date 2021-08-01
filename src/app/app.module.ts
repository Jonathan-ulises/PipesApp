import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

//Modulo personalizado para componentes de PrimeNg
//import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el local de la app
import localeEs from "@angular/common/locales/es-MX"
import localeJp from "@angular/common/locales/ja";
import { registerLocaleData } from "@angular/common";
registerLocaleData( localeEs );
registerLocaleData( localeJp );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    //Con esto establece la localizacion de las fechas, numeros, monedas de manera global
    { provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
