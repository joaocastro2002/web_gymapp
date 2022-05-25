import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
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
    private agendamentosDesafiosService: AgendamentosDesafiosService,
    private sessionManager: SessionManagerService,
    private token: TokenStorageService,
    private router: Router
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

      },
      error: error => {

        if (error.status == 401) {

          this.sessionManager.getNewToken().subscribe({
            next: data => {
              this.token.saveToken(data.token)

              this.getAgendamentos()
            },
            error: error => {
              console.log(error)
              this.router.navigate(['/login'])
            }
          })
        }
      }
    })

  }

}
