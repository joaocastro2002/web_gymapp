import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-comparar-avaliacao',
  templateUrl: './dados-comparar-avaliacao.component.html',
  styleUrls: ['./dados-comparar-avaliacao.component.css']
})
export class DadosCompararAvaliacaoComponent implements OnInit {

  dados = []

  constructor() { }

  ngOnInit(): void {
    this.dados = [{nome: 'Peso', valor: '85 Kg'},
    {nome: 'Massa Muscular', valor: '35 Kg'},
    {nome: 'Gordura Corporal', valor: '30%'},
    {nome: 'Gordura Visceral', valor: '10%'},
    {nome: 'Água', valor: '73%'},
    {nome: 'Proteína', valor: '50%'},
    {nome: 'Massa Óssea', valor: '10 Kg'},
    {nome: 'Metabolismo Basal', valor: '50 Kcal'}]
  }

}
