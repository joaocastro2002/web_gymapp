import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../header/services/header.service';

@Component({
  selector: 'app-comparar-avaliacao-fisica',
  templateUrl: './comparar-avaliacao-fisica.component.html',
  styleUrls: ['./comparar-avaliacao-fisica.component.css']
})
export class CompararAvaliacaoFisicaComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setTitle('Comparar Avaliações')
  }
}
