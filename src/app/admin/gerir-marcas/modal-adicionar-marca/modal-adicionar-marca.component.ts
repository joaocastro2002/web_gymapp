import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-adicionar-marca',
  templateUrl: './modal-adicionar-marca.component.html',
  styleUrls: ['./modal-adicionar-marca.component.css']
})
export class ModalAdicionarMarcaComponent implements OnInit {

  constructor(private modalService: NgModule) { }

  ngOnInit(): void {
  }

}
