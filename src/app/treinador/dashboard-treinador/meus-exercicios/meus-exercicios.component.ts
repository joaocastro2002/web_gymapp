import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { IMeusExerciciosTreinador, MeusExerciciosTreinadorService } from '../services/meus-exercicios-treinador.service';

@Component({
  selector: 'app-meus-exercicios',
  templateUrl: './meus-exercicios.component.html',
  styleUrls: ['./meus-exercicios.component.css']
})
export class MeusExerciciosComponent implements OnInit {
  meusExercicios = [];
  constructor(
    private meusExerciciosService: MeusExerciciosTreinadorService,
    private router: Router) { }

  ngOnInit(): void {
    this.getExercicios()
  }

  getExercicios() {
    this.meusExerciciosService.getExercicios().subscribe({
      next: data => {
        this.meusExercicios = data
      }
    })

  }

}
