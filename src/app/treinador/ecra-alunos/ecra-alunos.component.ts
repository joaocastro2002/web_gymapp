import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/services/header.service';


@Component({
  selector: 'app-ecra-alunos',
  templateUrl: './ecra-alunos.component.html',
  styleUrls: ['./ecra-alunos.component.css']
})
export class EcraAlunosComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setTitle('Alunos')
  }
}
