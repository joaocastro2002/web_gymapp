import { Component, Input, OnInit } from '@angular/core';
import { Marca } from './marca';

@Component({
  selector: 'app-card-marcas',
  templateUrl: './card-marcas.component.html',
  styleUrls: ['./card-marcas.component.css']
})
export class CardMarcasComponent implements OnInit {
  
  constructor() { 
  }

  @Input() marca?: Marca;

  ngOnInit(): void {
  }

}
