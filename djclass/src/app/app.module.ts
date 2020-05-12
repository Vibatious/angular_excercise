import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductsearchPipe } from './productsearch.pipe';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsearchPipe,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
