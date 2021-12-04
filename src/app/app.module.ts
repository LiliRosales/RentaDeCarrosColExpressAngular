import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerNavegacionComponent } from './plantillas/banner-navegacion/banner-navegacion.component';
import { FooterComponent } from './plantillas/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerNavegacionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
