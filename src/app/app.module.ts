import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './features/client/client.component';
import { ProductsComponent } from './features/products/products.component';
import { EmailComponent } from './controls/email/email.component';
import { DocumentTypeComponent } from './controls/document-type/document-type.component';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ProductsComponent,
    EmailComponent,
    DocumentTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
