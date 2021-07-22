import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    TranslocoLocaleModule.init({
      langToLocaleMapping: {
        en: 'en-US',
        fr: 'fr-CA',
        si: 'si'
      }})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
