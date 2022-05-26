import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ICompararAvaliacaoService } from '../services/comparar-avaliacao.service';

@Component({
  selector: 'app-medidas-comparar-avaliacao',
  templateUrl: './medidas-comparar-avaliacao.component.html',
  styleUrls: ['./medidas-comparar-avaliacao.component.css']
})
export class MedidasCompararAvaliacaoComponent implements OnInit, OnChanges {
  
  // para passar um valor para dentro do component
  @Input() avaliacao: ICompararAvaliacaoService

  medidas = []

  constructor() { }

  ngOnInit(): void {
    console.log("medidas", this.avaliacao)
    for(let medida of this.avaliacao.medidas_avaliacao){
      if(!medida.locais_medidas.unilado){
        medida.medida = medida.medida.split("x").join(" ")
      }
    }
    this.medidas = this.avaliacao.medidas_avaliacao
  }

  ngOnChanges(change: SimpleChanges){
    console.log("change", change)
    console.log("change1", this.avaliacao)
    for(let medida of this.avaliacao.medidas_avaliacao){
        if(!medida.locais_medidas.unilado){
          medida.medida = medida.medida.split("x").join(`${medida.unidade_medida} | `)
        }
    }
    this.medidas = this.avaliacao.medidas_avaliacao;
  }
}
