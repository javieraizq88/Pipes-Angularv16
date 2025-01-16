import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// Configuración del locale de la app
import localeEsCL from '@angular/common/locales/es-CL';
import localeEnNZ from '@angular/common/locales/en-NZ';
import localeArDZ from '@angular/common/locales/ar-DZ';

import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsCL );
registerLocaleData( localeEnNZ );
registerLocaleData( localeArDZ );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SharedModule,
  ],
  providers: [
    // se deja este idioma por defecto
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
