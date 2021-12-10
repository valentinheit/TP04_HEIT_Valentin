import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaisieClientComponent } from './components/saisie-client/saisie-client.component';
import { AddresseComponent } from './components/addresse/addresse.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecapitulatifComponent } from './components/recapitulatif/recapitulatif.component';
import { PhoneFormatPipe } from './phone-format.pipe';
import { ProductsService } from './product.service';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearcherComponent } from './components/searcher/searcher.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
    SearcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
