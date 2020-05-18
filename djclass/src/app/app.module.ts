import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductsearchPipe } from './productsearch.pipe';
import { MessageComponent } from './message/message.component';
import { DemoServiceService } from './demo-service.service';
// import { CustomDirective } from './custom.directive';
// import { CreditcardDirective } from './creditcard.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductsearchPipe,
    MessageComponent,
    // CustomDirective,
    // CreditcardDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{provide:DemoServiceService,useClass:DemoServiceService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
