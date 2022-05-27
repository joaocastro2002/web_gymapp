import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal-adicionar-marca',
  templateUrl: './modal-adicionar-marca.component.html',
  styleUrls: ['./modal-adicionar-marca.component.css']
})
export class ModalAdicionarMarcaComponent implements OnInit {

  title: string | null = null;

  constructor(public modalRef: MdbModalRef<ModalAdicionarMarcaComponent>) {}

  ngOnInit(): void {
  }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }

}
