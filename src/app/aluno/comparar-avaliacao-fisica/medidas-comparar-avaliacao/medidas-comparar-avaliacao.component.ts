import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ICompararAvaliacaoService } from '../services/comparar-avaliacao.service';

@Component({
  selector: 'app-medidas-comparar-avaliacao',
  templateUrl: './medidas-comparar-avaliacao.component.html',
  styleUrls: ['./medidas-comparar-avaliacao.component.css']
})
export class MedidasCompararAvaliacaoComponent implements OnInit, OnChanges {
  
  // para passar um valor para dentro do component
  // decorator - faz com que a variavel seja recebido por parametro do component - input que aquele parametro recebe
  // para as medidas recebo como parametro o id para conseguir ir buscar as medidas
  @Input() avaliacao: ICompararAvaliacaoService

  medidas = []

  constructor() { }

  // quando o component é inicializado
  ngOnInit(): void {
    console.log("medidas", this.avaliacao)
    // vamos iterar por cada medida do array de medidas dentro da avaliacao
    // se o unilado for true, as vamos tirar o x (30x30) e meter o espaço
    for(let medida of this.avaliacao.medidas_avaliacao){
      if(!medida.locais_medidas.unilado){
        medida.medida = medida.medida.split("x").join(" ")
      }
    }
    this.medidas = this.avaliacao.medidas_avaliacao
  }

  // quando alguma variavel do component do pai se altera ou do component
  // SimpleChanges é uma classe que permite detetar as mudanças - tem o valor antigo
  // porque quando atualizava a avaliação não estava a selecionar que uma nova estava a ser inicializada porque o ngOnInit só mete no inicio 
  ngOnChanges(change: SimpleChanges){
    console.log("change", change)
    console.log("change1", this.avaliacao)
    for(let medida of this.avaliacao.medidas_avaliacao){
        // tem dois lados
        if(!medida.locais_medidas.unilado){
          // vamos meter | se for unilado (30 | 30)
          medida.medida = medida.medida.split("x").join(`${medida.unidade_medida} | `)
        }
    }
    //  vamos guardar no array medidas, as medidas de avaliacao recebidas
    this.medidas = this.avaliacao.medidas_avaliacao;
  }
}
