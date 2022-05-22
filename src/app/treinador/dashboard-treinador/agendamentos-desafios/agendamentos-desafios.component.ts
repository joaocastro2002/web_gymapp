import { Component, OnInit } from '@angular/core';
import { AgendamentoDesafio } from './agendamento-desafio';

@Component({
  selector: 'app-agendamentos-desafios',
  templateUrl: './agendamentos-desafios.component.html',
  styleUrls: ['./agendamentos-desafios.component.css']
})
export class AgendamentosDesafiosComponent implements OnInit {
  agendamentosDesafios: AgendamentoDesafio[] = []
  constructor() { }

  ngOnInit(): void {
    this.getAgendamentos()
  }

  getAgendamentos(): void {
    this.agendamentosDesafios = [
      {
        nome: "Desafio 1",
        modalidade: "Modalidade 1",
        data: "01/01/2020",
      },
      {
        nome: "Desafio 2",
        modalidade: "Modalidade 2",
        data: "01/01/2020",
      },
      {
        nome: "Desafio 3",
        modalidade: "Modalidade 3",
        data: "01/01/2020",
      },
      {
        nome: "Desafio 3",
        modalidade: "Modalidade 3",
        data: "01/01/2020",
      },
      {
        nome: "Desafio 3",
        modalidade: "Modalidade 3",
        data: "01/01/2020",
      },
      {
        nome: "Desafio 3",
        modalidade: "Modalidade 3",
        data: "01/01/2020",
      },
      {
        nome: "Desafio 3",
        modalidade: "Modalidade 3",
        data: "01/01/2020",
      },
      {
        nome: "Desafio 3",
        modalidade: "Modalidade 3",
        data: "01/01/2020",
      }
    ]
  }

}
