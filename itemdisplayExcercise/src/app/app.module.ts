import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { PriceSearchPipe } from './price-search.pipe';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceSearchPipe,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
