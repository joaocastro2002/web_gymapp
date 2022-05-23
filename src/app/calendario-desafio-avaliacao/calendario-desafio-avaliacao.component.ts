import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/services/header.service';

@Component({
  selector: 'app-calendario-desafio-avaliacao',
  templateUrl: './calendario-desafio-avaliacao.component.html',
  styleUrls: ['./calendario-desafio-avaliacao.component.css']
})
export class CalendarioDesafioAvaliacaoComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setTitle('Agendamentos de Desafios e Avaliações')
  }

}
