import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacoes-aplicacao',
  templateUrl: './notificacoes-aplicacao.component.html',
  styleUrls: ['./notificacoes-aplicacao.component.css']
})
export class NotificacoesAplicacaoComponent implements OnInit {

  constructor() { }
  notificacoes = []

  ngOnInit(): void {
    this.getNotificacoes()
  }

  getNotificacoes() {
    this.notificacoes = [
      {
        titulo: 'Parabéns! Completou o seu desafio, obteve X resultado',
        tempo: 'Há 2 horas',
        type: 0,
        img: null
      },
      {
        titulo: 'O seu desafio foi agendado',
        tempo: 'Há 2 horas',
        type: 1,
        img: null
      },
      {
        type: 2,
        user: {
          nome: 'João da Silva',
          hashtag: "#JS_01",
        },
        tempo: 'Há 2 horas',
        titulo: 'Comentou a sua publicação',
      },

      {
        type: 3,
        user: {
          nome: 'João da Silva',
          hashtag: "#JS_01",
        },
        tempo: 'Há 2 horas',
        titulo: 'Gostou da sua publicação',
      },

      {
        type: -1,
        user: {
          nome: 'Administrador',
          hashtag: "#adm",
        },
        tempo: 'Há 2 horas',
        titulo: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Ut tempor ipsum at eleifend
        finibus.Aenean ultrices tincidunt convallis.
        In mollis sodales risus, quis luctus velit
        auctor in.In hac habitasse platea dictumst.`,
      }
    ]
  }

}
