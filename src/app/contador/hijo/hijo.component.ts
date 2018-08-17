import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  @Input() contador: number;//para recibir desde el padre
  @Output() cambioContador = new EventEmitter<number>();//para enviar al padre

  constructor() { }

  ngOnInit() {
  }

  multiplicar (){
    this.contador *=2;
    this.cambioContador.emit(this.contador);
  }
  
  dividir (){
    this.contador /=2;
    this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador){
    this.contador = nuevoContador;
    this.cambioContador.emit(this.contador);
  }

}
