import { Component, OnInit } from '@angular/core';
import { IdentificacaoAluno } from './identificacao-aluno';

@Component({
  selector: 'app-identificacao-aluno',
  templateUrl: './identificacao-aluno.component.html',
  styleUrls: ['./identificacao-aluno.component.css']
})
export class IdentificacaoAlunoComponent implements OnInit {

  identificacaoAluno: IdentificacaoAluno
  constructor() { }

  ngOnInit(): void {
    this.getIdentificacaoAluno()
  }

  getIdentificacaoAluno(): void {
    this.identificacaoAluno =
    {
      nome: "Antonio Miguel",
      hashtag: "#amj017",
      imagem: null
    }


  }



}
