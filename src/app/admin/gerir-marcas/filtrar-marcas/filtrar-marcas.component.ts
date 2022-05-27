import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtrar-marcas',
  templateUrl: './filtrar-marcas.component.html',
  styleUrls: ['./filtrar-marcas.component.css']
})
export class FiltrarMarcasComponent implements OnInit {
  @Output() eFiltroSelecionado = new EventEmitter<string>();
  @Input() filtro?: string;
  constructor() { }

  ngOnInit(): void {
  }

  selecionarFiltro(event) {
    let f = 'Filtro : ' + event.target.innerHTML;
    this.eFiltroSelecionado.emit(event.target.innerHTML)
    console.log(f)
  }

}
