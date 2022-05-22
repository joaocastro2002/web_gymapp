import { Component, OnInit } from '@angular/core';
import { Agendamento } from './agendamento';

@Component({
  selector: 'app-agendamentos-breaf',
  templateUrl: './agendamentos-breaf.component.html',
  styleUrls: ['./agendamentos-breaf.component.css']
})
export class AgendamentosBreafComponent implements OnInit {
  agendamentos = {}
  constructor() { }

  ngOnInit(): void {
    this.agendamentos = this.getAgendamentos();
  }

  getAgendamentos(): any {
    return {
      "6:00": [
        [
          {
            nome: "João",
            hour: "6:00",
            type: 0
          }
        ],
        [{
          nome: "José",
          hour: "6:15",
          type: 1
        },
        {
          nome: "Maria",
          hour: "6:30",
          type: 2
        }],
        [],
        [],
        [],
        [],
        [],
      ], "7:00": [
        [

        ],
        [],
        [{
          nome: "João",
          hour: "7:00",
          type: 1
        }],
        [],
        [],
        [],
        [{
          nome: "José",
          hour: "7:15",
          type: 1
        },
        {
          nome: "Maria",
          hour: "7:30",
          type: 1
        }],
      ], "8:00": [
        [

        ],
        [{
          nome: "José",
          hour: "8:15",
          type: 1
        },
        {
          nome: "Maria",
          hour: "8:30",
          type: 1
        }],
        [],
        [],
        [{
          nome: "João",
          hour: "8:00",
          type: 1
        }],
        [],
        [],
      ],
    }
  }


}
