import { Component } from '@angular/core';
import { Store } from '@ngrx/store';//Store tiene la estructura de contadorReducer.

import * as fromContador from './contador/contador.action';
// import { IncrementarAction, DecrementarAction } from './contador/contador.action';
import { AppState } from './app.reducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  contador: number;

  constructor(private store: Store<AppState>) {//AppState es una interfaz que le dice al store que el va a manejar ese objeto
    
    //con this.store.select('contador') yo le indico que solamente se subscriba al contador, en este caso dentro del subscribe ya no recibo el estado sino directamente el contador y esto es lo que procedo a guardar o imprimir
    this.store.select('contador').subscribe(contador => this.contador = contador);
    //en resumen, escucho solo una propiedad especifica del estado que tenga mi aplicacion
  }

  incrementar() {
    const accion = new fromContador.IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar() {
    // const action: Action = { en vez de incrementar mis acciones de esta manera, ya lo tengo de una forma mas limpia
    //   type: 'DECREMENTAR'
    // };
    const accion = new fromContador.DecrementarAction();//aqui de esta forma.
    this.store.dispatch(accion);
  }

}



