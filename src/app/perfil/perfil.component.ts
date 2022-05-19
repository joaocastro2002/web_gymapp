import { Component, OnInit } from '@angular/core';
import { PerfilService } from './services/perfil.service';
import { TreinosService } from './services/treinos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  userInfo: any;
  userTreinos: any;
  modalInfo: any;

  constructor(
    private perfilService: PerfilService,
    private treinosService: TreinosService
  ) { }

  ngOnInit(): void {
    this.perfilService.getPerfil().subscribe(data => {
      this.userInfo = data
    })

    this.treinosService.getTreinos().subscribe(data => {
      this.userTreinos = data

      console.log(data)
    })
  }


  modalPub(pub:any){
    this.modalInfo = pub

    console.log(this.modalInfo)
  }

}
