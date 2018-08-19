import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { ResetAction } from '../contador.action';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  contador: number;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe( contador => {
      this.contador = contador;
    });
  }

  reset() {
    const accion = new ResetAction();
    this.store.dispatch(accion);
  }

}
