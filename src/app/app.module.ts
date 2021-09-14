import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './partial/navbar/navbar.component';
import { HomeComponent } from './sections/home/home.component';
import { HeadComponent } from './component/head/head.component';
import { FooterComponent } from './partial/footer/footer.component';
import { ServicesComponent } from './component/services/services.component';
import { TecnologysComponent } from './component/tecnologys/tecnologys.component';
import { PrivacidadComponent } from './sections/privacidad/privacidad.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeadComponent,
    FooterComponent,
    ServicesComponent,
    TecnologysComponent,
    PrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
