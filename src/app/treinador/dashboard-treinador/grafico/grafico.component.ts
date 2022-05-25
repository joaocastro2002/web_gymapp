import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { DatasManagerService } from 'src/app/services/datas/datas-manager.service';
import { GraficoTreinosService } from '../services/grafico-treinos.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  constructor(
    private graficoService: GraficoTreinosService,
    private sessionManager: SessionManagerService,
    private token: TokenStorageService,
    private router: Router,
    private datasManager: DatasManagerService
  ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.getDados()

  }

  getDados() {
    const [segunda, domingo] = this.datasManager.startAndEndOfWeek(new Date())


    this.graficoService.getPlanosTreino(segunda, domingo).subscribe({
      next: data => {


        const diasSemana = this.datasManager.getAllWeekDays(new Date())

        let quantidades = []
        for (let dia of diasSemana) {
          const diaData = dia.toISOString().split('T')[0]
          const planos = data.filter(plano => plano.data.split('T')[0] == diaData)
          quantidades.push(planos.length)
        }
        this.setGrafico(quantidades)
      }
    })
  }

  setGrafico(dados: Array<number>) {
    const labels = [
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado",
      "Domingo",
    ];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Treinos por dia",
          backgroundColor: "#FF5050",
          borderColor: "#FF5050",
          data: dados,
          pointStyle: "circle",
          radius: 5,
        },
      ],
    };


    const chart = new Chart('treinosSemana', {
      type: "line",
      data: data,
      options: {
        plugins: {
          legend: {
            position: "top",
            align: "end",

            labels: {
              usePointStyle: true,
            },
          },
        },
      },
    });
  }

}
