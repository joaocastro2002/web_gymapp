import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-medidas',
  templateUrl: './criar-medidas.component.html',
  styleUrls: ['./criar-medidas.component.css']
})
export class CriarMedidasComponent implements OnInit {

  constructor() { }
  medidas = []
  medidasFormControl = {}
  avaliacaoForm: FormGroup
  ngOnInit(): void {
    this.getMedidasMarca()
  }
  onSubmit() { }

  getMedidasMarca() {
    this.medidas = [
      {
        unilado: true,
        nome: "Peito"
      },
      {
        unilado: true,
        nome: "Cintura"
      },
      {
        unilado: true,
        nome: "Abdómen"
      },
      {
        unilado: true,
        nome: "Quadril"
      },
      {
        unilado: false,
        nome: "Tricep"
      },
      {
        unilado: false,
        nome: "Bicep"
      },
      {
        unilado: false,
        nome: "Coxa"
      },
      {
        unilado: false,
        nome: "Gémeo inferior"
      },

    ]
    for (let medida of this.medidas) {
      this.medidasFormControl[medida.nome] = new FormControl(null, Validators.required)


    }
    this.medidasFormControl['peso'] = new FormControl(null, Validators.required)
    this.medidasFormControl['Musculo'] = new FormControl(null, Validators.required)
    this.medidasFormControl['Água'] = new FormControl(null, Validators.required)
    this.medidasFormControl['Proteina'] = new FormControl(null, Validators.required)
    this.medidasFormControl['Gordura Corporal'] = new FormControl(null, Validators.required)
    this.medidasFormControl['Gordura Visceral'] = new FormControl(null, Validators.required)
    this.medidasFormControl['Massa Ossea'] = new FormControl(null, Validators.required)
    this.medidasFormControl['Metabolismo Basal'] = new FormControl(null, Validators.required)
    this.medidasFormControl['IMC'] = new FormControl(null, Validators.required)
    this.avaliacaoForm = new FormGroup(this.medidasFormControl)
  }
}
