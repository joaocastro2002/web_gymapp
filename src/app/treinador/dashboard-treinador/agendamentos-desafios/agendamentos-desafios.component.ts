import { Component, OnInit } from '@angular/core';
import { AgendamentosDesafiosService, IAgendamentosDesafios } from '../services/agendamentos-desafios.service';
import { AgendamentoDesafio } from './agendamento-desafio';

@Component({
  selector: 'app-agendamentos-desafios',
  templateUrl: './agendamentos-desafios.component.html',
  styleUrls: ['./agendamentos-desafios.component.css']
})
export class AgendamentosDesafiosComponent implements OnInit {
  agendamentosDesafios: IAgendamentosDesafios[] = []
  constructor(
    private agendamentosDesafiosService: AgendamentosDesafiosService
  ) { }



  ngOnInit(): void {
    this.getAgendamentos()
  }

  getAgendamentos(): void {
    this.agendamentosDesafiosService.getAgendamentos().subscribe({
      next: data => {
        let aceites = data.filter(agendamento => agendamento.isAceite)
        for (let agendamento of aceites) {
          let today = new Date();
          let agendamentoDate = new Date(agendamento.data_agendamento);

          if (agendamentoDate.getDate() == today.getDate() && agendamentoDate.getMonth() == today.getMonth() && agendamentoDate.getFullYear() == today.getFullYear()) {
            agendamento.data_agendamento = agendamento.data_agendamento.split('T')[0]
            this.agendamentosDesafios.push(agendamento)
          }
        }
        console.log(this.agendamentosDesafios)
      },
      error: error => {

      }
    })

  }

}
