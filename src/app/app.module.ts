import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DuplicatePipe } from './pipes/duplicate.pipe';
import { DetailComponent } from './detail/detail.component'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EnfantComponent } from './enfant/enfant.component';
import { Enfant2Component } from './enfant2/enfant2.component';
import { InputOutputComponent } from './exercice/input-output/input-output.component';
import { InputOutput2Component } from './exercice/input-output2/input-output2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DuplicatePipe,
    DetailComponent,
    EnfantComponent,
    Enfant2Component,
    InputOutputComponent,
    InputOutput2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
