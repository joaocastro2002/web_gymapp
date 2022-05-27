import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao-adicionar-marca',
  templateUrl: './botao-adicionar-marca.component.html',
  styleUrls: ['./botao-adicionar-marca.component.css']
})
export class BotaoAdicionarMarcaComponent implements OnInit {
  @Output() eAdicionarMarca = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  adicionarMarca(event) {
    this.eAdicionarMarca.emit(event.target.innerHTML)
  }

}
