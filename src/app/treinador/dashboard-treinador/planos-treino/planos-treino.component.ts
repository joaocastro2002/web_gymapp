import { Component, OnInit } from '@angular/core';
import { PlanosTreino } from './planosTreino';

@Component({
  selector: 'app-planos-treino',
  templateUrl: './planos-treino.component.html',
  styleUrls: ['./planos-treino.component.css']
})
export class PlanosTreinoComponent implements OnInit {
  planosTreino: PlanosTreino[] = []
  constructor() { }

  ngOnInit(): void {
    this.getPlanosTreino()
  }

  getPlanosTreino() {
    this.planosTreino = [
      {
        nomeAluno: "João",
        modalidade: "Futebol",
        descricao: "Futebol de campo"
      },
      {
        nomeAluno: "Maria",
        modalidade: "Futebol",
        descricao: "Futebol de campo"
      },
      {
        nomeAluno: "Pedro",
        modalidade: "Futebol",
        descricao: "Futebol de campo"
      },
      {
        nomeAluno: "Pedro",
        modalidade: "Futebol",
        descricao: "Futebol de campo"
      }
    ]
  }

}
