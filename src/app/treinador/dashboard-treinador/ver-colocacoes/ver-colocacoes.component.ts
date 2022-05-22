import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-colocacoes',
  templateUrl: './ver-colocacoes.component.html',
  styleUrls: ['./ver-colocacoes.component.css']
})
export class VerColocacoesComponent implements OnInit {
  colocacoes = []


  constructor() { }

  ngOnInit(): void {
    this.getColocado()
  }

  getColocado() {
    this.colocacoes = [
      {
        hashtag: "#so_01",
        pontuacao: 10,
        imagem: null
      },
      {
        hashtag: "#ma_01",
        pontuacao: 20,
        imagem: null
      },
      {
        hashtag: "#pj_05",
        pontuacao: 30,
        imagem: null
      },
      {
        hashtag: "#jb_03",
        pontuacao: 40,
        imagem: null
      },
      {
        hashtag: "#ja_02",
        pontuacao: 50,
        imagem: null
      },
      {
        hashtag: "#jb_01",
        pontuacao: 40,
        imagem: null
      },
      {
        hashtag: "#ja_02",
        pontuacao: 50,
        imagem: null
      },
      {
        hashtag: "#jb_01",
        pontuacao: 40,
        imagem: null
      },
      {
        hashtag: "#ja_03",
        pontuacao: 50,
        imagem: null
      },
      {
        hashtag: "#jb_01",
        pontuacao: 40,
        imagem: null
      },
    ]
    this.colocacoes = this.colocacoes.sort((a, b) => (a.pontuacao > b.pontuacao) ? -1 : 1)
  }

}
