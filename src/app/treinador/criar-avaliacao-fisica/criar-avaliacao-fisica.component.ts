import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/services/header.service';
@Component({
  selector: 'app-criar-avaliacao-fisica',
  templateUrl: './criar-avaliacao-fisica.component.html',
  styleUrls: ['./criar-avaliacao-fisica.component.css']
})
export class CriarAvaliacaoFisicaComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setTitle('Avaliação Fisica')
  }

}
