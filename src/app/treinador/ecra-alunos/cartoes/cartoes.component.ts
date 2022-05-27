import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { IAlunos, VerAlunosService } from '../services/ecra-alunos.service';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.css']
})
export class CartoesComponent implements OnInit {

  alunos = [];

  constructor(
    private verAlunosService: VerAlunosService,
    private sessionManager: SessionManagerService,
    private token: TokenStorageService,
    private router: Router){}

  ngOnInit(): void {
     /*this.alunos = [
    {nome: 'André Silva', hashtag: '#ts0202'},
    {nome: 'Lara Martins', hashtag: '#ts0202'},
    {nome: 'João Silva', hashtag: '#ts0202'},
    {nome: 'João Costa', hashtag: '#ts0202'},
    {nome: 'Ana Matos', hashtag: '#ts0202'},
    {nome: 'Rui Paiva', hashtag: '#ts0202'},
    {nome: 'Isa Santos', hashtag: '#ts0202'},
    {nome: 'Lara Martins', hashtag: '#ts0202'},
    {nome: 'João Silva', hashtag: '#ts0202'},
    {nome: 'João Costa', hashtag: '#ts0202'},
    {nome: 'Ana Matos', hashtag: '#ts0202'},
    {nome: 'Rui Paiva', hashtag: '#ts0202'},
    {nome: 'Isa Santos', hashtag: '#ts0202'},
    {nome: 'Lara Martins', hashtag: '#ts0202'},
    {nome: 'João Silva', hashtag: '#ts0202'},
    {nome: 'João Costa', hashtag: '#ts0202'},
    {nome: 'Ana Matos', hashtag: '#ts0202'},
    {nome: 'Rui Paiva', hashtag: '#ts0202'},
    {nome: 'Isa Santos', hashtag: '#ts0202'}]*/
    this.getAlunos()
  }

  getAlunos(){
    this.verAlunosService.getAlunos().subscribe({
    next: data => {
      console.log(data)
      this.alunos = data

    },
    error: error => {

      if (error.status == 401) {

        this.sessionManager.getNewToken().subscribe({
          next: data => {
            this.token.saveToken(data.token)

            this.getAlunos()
          },
          error: error => {
            console.log(error)
            this.router.navigate(['/login'])
          }
        })
      }
    }
  })}

}
