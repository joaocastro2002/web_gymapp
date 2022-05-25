import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { DatasManagerService } from 'src/app/services/datas/datas-manager.service';
import { AgendamentosAvalicaoBreafService, IAgendametosAvalicaoBreaf } from '../services/AgendamentosBreaf/agendamentos-avalicao-breaf.service';
import { AgendamentosDesafioBreafService, IAgendametosDesafioBreaf } from '../services/AgendamentosBreaf/agendamentos-desafios-breaf.service';
import { Agendamento } from './agendamento';

@Component({
  selector: 'app-agendamentos-breaf',
  templateUrl: './agendamentos-breaf.component.html',
  styleUrls: ['./agendamentos-breaf.component.css']
})
export class AgendamentosBreafComponent implements OnInit {
  agendamentos = {}
  agendamentosDesafios: Array<IAgendametosDesafioBreaf[]> = []
  agendamentosAvaliacoes: Array<IAgendametosAvalicaoBreaf[]> = []
  semana = []
  constructor(
    private agendamentosAvalicaoesService: AgendamentosAvalicaoBreafService,
    private agendamentosDesafiosService: AgendamentosDesafioBreafService,
    private sessionManager: SessionManagerService,
    private token: TokenStorageService,
    private router: Router,
    private datasManager: DatasManagerService,
  ) { }

  ngOnInit(): void {
    this.getAgendamentosAvaliacao();
  }

  getAgendamentosAvaliacao(): any {
    this.agendamentosAvalicaoesService.getAgendamentosAvalicaoBreaf().subscribe({
      next: data => {
        const weekDays = this.datasManager.getAllWeekDays(new Date());
        let aceites = data.filter(agendamento => agendamento.isAceite)
        let semana = []
        for (let dia of weekDays) {
          let diaData = new Date(dia).toISOString().split('T')[0]
          let agendamentosDia = aceites.filter(agendamento => agendamento.data_agendamento.split('T')[0] == diaData)
          agendamentosDia.map(agendamento => { agendamento.type = 2 })
          semana.push(agendamentosDia)
        }
        this.agendamentosDesafios = semana
        this.getAgendamentosDesafio()

      },
      error: error => {

        if (error.status == 401) {

          this.sessionManager.getNewToken().subscribe({
            next: data => {
              this.token.saveToken(data.token)

              this.getAgendamentosAvaliacao()
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
  getAgendamentosDesafio(): any {

    this.agendamentosDesafiosService.getAgendamentosDesafioBreaf().subscribe({
      next: data => {
        const weekDays = this.datasManager.getAllWeekDays(new Date());
        let aceites = data.filter(agendamento => agendamento.isAceite)
        let semana = []
        for (let i = 0; i < weekDays.length; i++) {
          let diaData = new Date(weekDays[i]).toISOString().split('T')[0]
          let agendamentosDia = aceites.filter(agendamento => agendamento.data_agendamento.split('T')[0] == diaData)
          agendamentosDia.map(agendamento => { agendamento.type = 1 })
          console.log('agendamentos: ', agendamentosDia)
          semana.push(agendamentosDia)
        }
        this.agendamentosAvaliacoes = semana
        this.uniteAgendamentos()


      },
      error: error => {

        if (error.status == 401) {

          this.sessionManager.getNewToken().subscribe({
            next: data => {
              this.token.saveToken(data.token)

              this.getAgendamentosAvaliacao()
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


  private uniteAgendamentos() {
    for (let dia of this.agendamentosDesafios) {
      this.semana.push(dia)
    }
    for (let i = 0; i < this.agendamentosAvaliacoes.length; i++) {
      this.semana[i] = this.semana[i].concat(this.agendamentosAvaliacoes[i])
    }
    console.log('final : ', this.semana)
    this.formatAgendamentos()
    this.setAgendamentosAvaliacao()
  }

  private formatAgendamentos() {

    for (let dia of this.semana) {
      for (let agendamento of dia) {
        let horaSplit = new Date(agendamento.data_agendamento).toLocaleString("pt-pt").split(',')[1].split(':')
        const key = horaSplit[0] + ':00'
        if (!this.agendamentos.hasOwnProperty(key)) {
          this.agendamentos[key] = []
          for (let i = 0; i < 7; i++) {
            this.agendamentos[key].push([])
          }
        }
      }
    }
    console.log(this.agendamentos)

  }

  setAgendamentosAvaliacao() {
    console.log(this.semana)

    for (let i = 0; i < this.semana.length; i++) {
      let agendamentosDia = this.semana[i]
      for (let agendamento of agendamentosDia) {
        let horaSplit = new Date(agendamento.data_agendamento).toLocaleString("pt-pt").split(',')[1].split(':')
        const key = horaSplit[0] + ':00'
        const today = new Date()
        const agDate = new Date(agendamento.data_agendamento)
        console.log(agDate.getHours(), agDate.getMinutes(), ' | ', today.getHours(), today.getMinutes())

        if ((today.getDate() == agDate.getDate() && today.getHours() == agDate.getHours() && today.getMinutes() > agDate.getMinutes())
          || today.getDate() == agDate.getDate() && today.getHours() > agDate.getHours()) {
          agendamento.type = 0;
        }
        else if ((today.getDate() > agDate.getDate() && today.getMonth() >= agDate.getMonth() && today.getFullYear() >= agDate.getFullYear())) {
          agendamento.type = 0;
        }
        let dt = new Date(agendamento.data_agendamento).toLocaleString("pt-pt").split(',')[1].split(':')
        dt.pop()
        agendamento.data_agendamento = dt.join(':')
        this.agendamentos[key][i].push(agendamento)
      }
    }
    console.log(this.agendamentos)
  }

}
