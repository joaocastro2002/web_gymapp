import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafios-decorrer-breaf',
  templateUrl: './desafios-decorrer-breaf.component.html',
  styleUrls: ['./desafios-decorrer-breaf.component.css']
})
export class DesafiosDecorrerBreafComponent implements OnInit {

  desafios = []
  constructor() { }

  ngOnInit(): void {
    this.getDesafios()
  }

  getDesafios() {
    this.desafios = [
      {
        nome: 'Desafio 1',
        modalidade: 'Modalidade 1',
        data: '01/01/2020',
      },
      {
        nome: 'Desafio 1',
        modalidade: 'Modalidade 1',
        data: '01/01/2020',
      },
      {
        nome: 'Desafio 1',
        modalidade: 'Modalidade 1',
        data: '01/01/2020',
      },
    ]
  }

}
