import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // <-- Bootstrap
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
 declarations: [
   AppComponent
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   NgbModule.forRoot()
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
