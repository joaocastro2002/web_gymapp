import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/services/header.service';

@Component({
  selector: 'app-ver-publicacao',
  templateUrl: './ver-publicacao.component.html',
  styleUrls: ['./ver-publicacao.component.css']
})
export class VerPublicacaoComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setTitle('Publicação')
  }

}
