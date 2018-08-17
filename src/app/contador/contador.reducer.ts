import { Action } from '@ngrx/store';
import { INCREMENTAR, DECREMENTAR } from './contador.action';

export function contadorReducer(state: number = 10, action: Action) {
    
    //para no tener string duros en mi switch y trabajar mas limpio, creo mi contador.action y ahi creo las constantes que van en mi switch.
    switch (action.type) {
        case INCREMENTAR:
            return state + 1;
        case DECREMENTAR:
            return state - 1;

        default:
            return state;
    }

}