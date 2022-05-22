import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../header/services/header.service';

@Component({
  selector: 'app-ver-avaliacoes-dias',
  templateUrl: './ver-avaliacoes-dias.component.html',
  styleUrls: ['./ver-avaliacoes-dias.component.css']
})
export class VerAvaliacoesDiasComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setTitle('Avaliações Físicas')
  }

}
