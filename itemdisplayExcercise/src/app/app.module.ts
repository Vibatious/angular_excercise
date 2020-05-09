import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PriceSearchPipe } from './price-search.pipe';
import { StockValueColorPipe } from './stock-value-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PriceSearchPipe,
    StockValueColorPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
