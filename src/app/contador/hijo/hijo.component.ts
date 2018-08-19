import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { DividirAction, MultiplicarAction } from '../contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {

    this.store.select('contador').subscribe( contador => {
      this.contador = contador;
      console.log(contador);
    });
  }

  multiplicar() {
    const accion = new MultiplicarAction(3);
    this.store.dispatch(accion);
  }
  
  dividir() {
    const accion = new DividirAction(3);
    this.store.dispatch(accion);
  }

}
