import { Component, OnInit } from '@angular/core';
import { Dados } from './dados';

@Component({
  selector: 'app-cartoes',
  templateUrl: './cartoes.component.html',
  styleUrls: ['./cartoes.component.css']
})
export class CartoesComponent implements OnInit {

  alunos = Dados;
  
  constructor() { }

  ngOnInit(): void {
  }

  

}
