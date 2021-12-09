import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaisieClientComponent } from './saisie-client/saisie-client.component';
import { AddresseComponent } from './addresse/addresse.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { PhoneFormatPipe } from './phone-format.pipe';
import { ProductsService } from './product.service';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SaisieClientComponent,
    AddresseComponent,
    HeaderComponent,
    FooterComponent,
    RecapitulatifComponent,
    PhoneFormatPipe,
    CatalogueComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
