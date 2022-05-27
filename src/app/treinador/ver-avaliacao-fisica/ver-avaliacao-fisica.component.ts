import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../header/services/header.service';

@Component({
  selector: 'app-ver-avaliacao-fisica',
  templateUrl: './ver-avaliacao-fisica.component.html',
  styleUrls: ['./ver-avaliacao-fisica.component.css']
})
export class VerAvaliacaoFisicaComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    // vamos meter um titulo no topo da página
    this.headerService.setTitle('Avaliação Física')
  }
}
