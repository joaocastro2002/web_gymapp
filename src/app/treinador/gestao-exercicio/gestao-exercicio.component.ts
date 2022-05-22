import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/services/header.service';

@Component({
  selector: 'app-gestao-exercicio',
  templateUrl: './gestao-exercicio.component.html',
  styleUrls: ['./gestao-exercicio.component.css']
})
export class GestaoExercicioComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setTitle('Gestão de Exercicios')
  }

}
