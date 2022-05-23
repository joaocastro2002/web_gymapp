import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medidas-comparar-avaliacao2',
  templateUrl: './medidas-comparar-avaliacao2.component.html',
  styleUrls: ['./medidas-comparar-avaliacao2.component.css']
})
export class MedidasCompararAvaliacao2Component implements OnInit {

  medidas = []

  constructor() { }

  ngOnInit(): void {
    this.medidas = [{nome: 'Braço', valor: '30cm'},
    {nome: 'Costas', valor: '30cm'}]
  }
}
