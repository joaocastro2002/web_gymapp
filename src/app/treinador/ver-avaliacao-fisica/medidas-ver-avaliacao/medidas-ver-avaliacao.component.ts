import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medidas-ver-avaliacao',
  templateUrl: './medidas-ver-avaliacao.component.html',
  styleUrls: ['./medidas-ver-avaliacao.component.css']
})
export class MedidasVerAvaliacaoComponent implements OnInit {
  
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
