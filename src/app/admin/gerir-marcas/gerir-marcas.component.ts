import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/services/header.service';
import { MARCAS } from './card-marcas/marcas';

@Component({
  selector: 'app-gerir-marcas',
  templateUrl: './gerir-marcas.component.html',
  styleUrls: ['./gerir-marcas.component.css']
})
export class GerirMarcasComponent implements OnInit {

  marcas = MARCAS;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setTitle('Marcas')
  }

}
