import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {

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
          data: [0, 50, 100, 100, 150, 100, 0],
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
