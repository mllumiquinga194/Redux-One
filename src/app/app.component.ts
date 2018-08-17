import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';//Store tiene la estructura de contadorReducer.
import { IncrementarAction, DecrementarAction } from './contador/contador.action';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  contador: number;

  constructor(private store: Store<AppState>) {//AppState es una interfaz que le dice al store que el va a manejar ese objeto
    
    this.store.subscribe(state => {//lo que hago aqui es imprimir cualquier cambio que sufra el state
      this.contador = state.contador;

    });
  }

  incrementar() {
    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar() {
    // const action: Action = { en vez de incrementar mis acciones de esta manera, ya lo tengo de una forma mas limpia
    //   type: 'DECREMENTAR'
    // };
    const accion = new DecrementarAction();//aqui de esta forma.

    this.store.dispatch(accion);
  }

}



