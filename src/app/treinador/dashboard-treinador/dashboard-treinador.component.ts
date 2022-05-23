import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/services/header.service';

@Component({
  selector: 'app-dashboard-treinador',
  templateUrl: './dashboard-treinador.component.html',
  styleUrls: ['./dashboard-treinador.component.css']
})
export class DashboardTreinadorComponent implements OnInit {

  constructor(
    private headerService: HeaderService,


  ) { }

  ngOnInit(): void {
    this.headerService.setTitle('Dashboard')
  }

}
