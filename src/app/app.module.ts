import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './components/contact/contact.component';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';



@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ClientsComponent,
    ContactComponent,
    FooterComponent,
    MainBannerComponent,
    MainComponent,
    MenuComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
