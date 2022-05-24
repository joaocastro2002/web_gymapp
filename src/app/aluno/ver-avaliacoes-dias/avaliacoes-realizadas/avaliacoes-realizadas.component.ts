import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliacoes-realizadas',
  templateUrl: './avaliacoes-realizadas.component.html',
  styleUrls: ['./avaliacoes-realizadas.component.css']
})
export class AvaliacoesRealizadasComponent implements OnInit {

  avaliacoes = []

  constructor() { }

  ngOnInit(): void {
    this.avaliacoes = [{nome: '1ªAvaliação', data: '10/09/2021'},
    {nome: '2ªAvaliação', data: '09/10/2021'},
    {nome: '3ªAvaliação', data: '12/11/2021'},
    {nome: '4ªAvaliação', data: '08/12/2021'},
    {nome: '5ªAvaliação', data: '14/01/2022'},
    {nome: '6ªAvaliação', data: '10/02/2022'},
    {nome: '7ªAvaliação', data: '11/03/2022'}]
  }

}
