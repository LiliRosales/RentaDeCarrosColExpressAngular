import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerNavegacionComponent } from './plantillas/banner-navegacion/banner-navegacion.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { InicioComponent } from './plantillas/inicio/inicio.component';
import { ErrorComponent } from './plantillas/error/error.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BannerNavegacionComponent,
    FooterComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
