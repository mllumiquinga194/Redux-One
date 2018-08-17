import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ngrx
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { contadorReducer } from './contador/contador.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot( {contador: contadorReducer}) //esta es la estructura que tiene mi aplicacion. o sea mi aplicacion tiene la estructura de contadorReducer.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
