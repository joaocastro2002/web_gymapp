import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IDadosAvaliacao } from '../../ver-avaliacoes-dias/dados-avaliacoes-realizadas/dados-avaliacao';
import { ICompararAvaliacaoService } from '../services/comparar-avaliacao.service';

@Component({
  selector: 'app-dados-comparar-avaliacao',
  templateUrl: './dados-comparar-avaliacao.component.html',
  styleUrls: ['./dados-comparar-avaliacao.component.css']
})
export class DadosCompararAvaliacaoComponent implements OnInit, OnChanges {
  @Input() avaliacao: ICompararAvaliacaoService
  dados=[];

  constructor() { }

  ngOnInit(): void {
    this.dados = [{nome:"peso", valor: this.avaliacao.peso, unidade:"Kg", imagem:"../../../../assets/img/weight-scale.png"},
    {nome:"musculo", valor: this.avaliacao.musculo, unidade:"Kg", imagem:"../../../../assets/img/muscle.png"},
    {nome:"gordura_corporal", valor: this.avaliacao.gordura_corporal, unidade:"%", imagem:"../../../../assets/img/liposuction.png"},
    {nome:"gordura_visceral", valor: this.avaliacao.gordura_corporal, unidade:"%", imagem:"../../../../assets/img/body-fat.png"},
    {nome:"agua", valor: this.avaliacao.agua, unidade:"%", imagem:"../../../../assets/img/trans-fat.png"},
    {nome:"proteina", valor: this.avaliacao.proteina, unidade:"%", imagem:"../../../../assets/img/proteins.png"},
    {nome:"massa_ossea", valor: this.avaliacao.massa_ossea, unidade:"kg", imagem:"../../../../assets/img/bone.png"},
    {nome:"metabolismo_basal", valor: this.avaliacao.metabolismo_basal, unidade:"Kcal", imagem:"../../../../assets/img/kcal.png"}]
  }

  ngOnChanges(change: SimpleChanges){
    this.dados = [{nome:"peso", valor: this.avaliacao.peso, unidade:"Kg", imagem:"../../../../assets/img/weight-scale.png"},
    {nome:"musculo", valor: this.avaliacao.musculo, unidade:"Kg", imagem:"../../../../assets/img/muscle.png"},
    {nome:"gordura_corporal", valor: this.avaliacao.gordura_corporal, unidade:"%", imagem:"../../../../assets/img/liposuction.png"},
    {nome:"gordura_visceral", valor: this.avaliacao.gordura_corporal, unidade:"%", imagem:"../../../../assets/img/body-fat.png"},
    {nome:"agua", valor: this.avaliacao.agua, unidade:"%", imagem:"../../../../assets/img/trans-fat.png"},
    {nome:"proteina", valor: this.avaliacao.proteina, unidade:"%", imagem:"../../../../assets/img/proteins.png"},
    {nome:"massa_ossea", valor: this.avaliacao.massa_ossea, unidade:"kg", imagem:"../../../../assets/img/bone.png"},
    {nome:"metabolismo_basal", valor: this.avaliacao.metabolismo_basal, unidade:"Kcal", imagem:"../../../../assets/img/kcal.png"}]
  }
}
