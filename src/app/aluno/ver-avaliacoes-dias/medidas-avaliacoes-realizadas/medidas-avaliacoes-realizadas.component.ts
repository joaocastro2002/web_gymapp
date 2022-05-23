import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medidas-avaliacoes-realizadas',
  templateUrl: './medidas-avaliacoes-realizadas.component.html',
  styleUrls: ['./medidas-avaliacoes-realizadas.component.css']
})
export class MedidasAvaliacoesRealizadasComponent implements OnInit {

  medidas = []

  constructor() { }

  ngOnInit(): void {
    this.medidas = [{nome: 'Braço', valor: '30cm'},
    {nome: 'Antebraço', valor: '27cm'},
    {nome: 'Coxa', valor: '20cm'},
    {nome: 'Barriga', valor: '51cm'},
    {nome: 'Peito', valor: '93cm'},
    {nome: 'Ombros', valor: '105cm'},
    {nome: 'Ombros', valor: '70cm'},
    {nome: 'Ombros', valor: '70cm'},
    {nome: 'Ombros', valor: '70cm'},
    {nome: 'Ombros', valor: '70cm'},]
  }
}
