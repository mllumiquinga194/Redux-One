// import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, DIVIDIR, actions, RESET } from './contador.action';
import * as fromContador from './contador.action';

export function contadorReducer(state: number = 10, action: fromContador.actions) {

    //para no tener string duros en mi switch y trabajar mas limpio, creo mi contador.action y ahi creo las constantes que van en mi switch.
    switch (action.type) {
        case fromContador.INCREMENTAR://INCREMENTAR viene de contador.action
            return state + 1;
        case fromContador.DECREMENTAR://DECREMENTAR viene de contador.action
            return state - 1;
        case fromContador.MULTIPLICAR://DECREMENTAR viene de contador.action
            return state * action.paylaod;
        case fromContador.DIVIDIR://DECREMENTAR viene de contador.action
            return state / action.paylaod;
        case fromContador.RESET://DECREMENTAR viene de contador.action
            return state = 10;
        default:
            return state;
    }

}