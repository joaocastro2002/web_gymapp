import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/header/services/header.service';
import { MARCAS } from './card-marcas/marcas';
import { MarcasService } from './services/marcas.service';

@Component({
  selector: 'app-gerir-marcas',
  templateUrl: './gerir-marcas.component.html',
  styleUrls: ['./gerir-marcas.component.css']
})
export class GerirMarcasComponent implements OnInit {

  marcas = MARCAS
  marcasInfo: any
  displayStyle = "none"
  filtro: string = "Nome Ascenente"

  constructor(private headerService: HeaderService, 
    private marcasService: MarcasService) { }

  ngOnInit(): void {
    this.headerService.setTitle('Marcas')

    this.marcasService.getMarcas().subscribe(data => {
      this.marcasInfo = data
      
      // order by marca_id
      this.marcasInfo.sort((x,y) => x.marca_id > y.marca_id ? 1 : -1);
      console.log(this.marcasInfo)
    })
  }

  cancelarMarca() {
    this.displayStyle = "none"
  }

  guardarMarca() {
    this.displayStyle = "none"
  }
  
  alterarFiltro(novoFiltro: string) {
    console.log(novoFiltro)
    this.filtro = novoFiltro

    console.log(this.marcasInfo)

    if (this.filtro.toLowerCase() === 'todos'){
      this.marcasInfo.sort((x,y) => x.marca_id > y.marca_id ? 1 : -1);
    }
    else if (this.filtro.toLowerCase() === 'nome ascendente'){
      this.marcasInfo.sort((x,y) => x.nome > y.nome ? 1 : -1);
    }
    else if (this.filtro.toLowerCase() === 'nome descendente'){
      this.marcasInfo.sort((x,y) => x.nome < y.nome ? 1 : -1);
    }
    else if (this.filtro.toLowerCase() === 'c/ mobilidade'){
      this.marcasInfo.filter((x) => x.mobilidade);
    }
    else {
      this.marcasInfo.filter((x) => !x.mobilidade);
    }
  }

  abrirAdicionarMarca(){
    this.displayStyle = "block"
  }

}
