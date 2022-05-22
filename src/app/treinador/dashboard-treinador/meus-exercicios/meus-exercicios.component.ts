import { Component, OnInit } from '@angular/core';
import { MeusExercicios } from './meus-exercicios';

@Component({
  selector: 'app-meus-exercicios',
  templateUrl: './meus-exercicios.component.html',
  styleUrls: ['./meus-exercicios.component.css']
})
export class MeusExerciciosComponent implements OnInit {
  meusExercicios: MeusExercicios[] = []
  constructor() { }

  ngOnInit(): void {
    this.getExercicios()
  }

  getExercicios() {
    this.meusExercicios = [
      { nome: "Exercício 1" },
      { nome: "Exercício 2" },
      { nome: "Exercício 3" },
      { nome: "Exercício 4" },
      { nome: "Exercício 5" },
      { nome: "Exercício 6" },
    ]
  }

}
