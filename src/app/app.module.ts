import { SharedModule } from './shared/shared.module';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//configuracion de locale de la app

import localeEsSv from '@angular/common/locales/es-SV';
import localeEsFr from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';


registerLocaleData(localeEsSv);
registerLocaleData(localeEsFr);
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-SV' // este apartado define una zona horaria por defecto (para pipes es util)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
