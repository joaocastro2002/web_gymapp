import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medidas-comparar-avaliacao',
  templateUrl: './medidas-comparar-avaliacao.component.html',
  styleUrls: ['./medidas-comparar-avaliacao.component.css']
})
export class MedidasCompararAvaliacaoComponent implements OnInit {

  medidas = []

  constructor() { }

  ngOnInit(): void {
    this.medidas = [{nome: 'Braço', valor: '30cm'},
    {nome: 'Braço', valor: '30cm'},
    {nome: 'Braço', valor: '30cm'},
    {nome: 'Braço', valor: '30cm'},
    {nome: 'Braço', valor: '30cm'},
    {nome: 'Braço', valor: '30cm'},
    {nome: 'Braço', valor: '30cm'},
    {nome: 'Braço', valor: '30cm'}]
  }
}
