import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { ITop10, Top10Service } from '../services/top10.service';

@Component({
  selector: 'app-ver-colocacoes',
  templateUrl: './ver-colocacoes.component.html',
  styleUrls: ['./ver-colocacoes.component.css']
})
export class VerColocacoesComponent implements OnInit {
  colocacoes: ITop10[] = []


  constructor(
    private top10Service: Top10Service,
  ) { }

  ngOnInit(): void {
    this.getColocado()
  }

  getColocado() {
    this.top10Service.getTop10().subscribe({
      next: data => {
        this.colocacoes = data
      },
      error: error => {
        console.log(error)
      }
    })

    this.colocacoes = this.colocacoes.sort((a, b) => (a.pontos > b.pontos) ? -1 : 1)
  }

}
