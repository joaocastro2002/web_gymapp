import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HeaderService } from 'src/app/header/services/header.service';
import { AgendarAvaliacaoService } from './services/agendar-avaliacao.service';

@Component({
  selector: 'app-agendar-avaliacao-component',
  templateUrl: './agendar-avaliacao-component.component.html',
  styleUrls: ['./agendar-avaliacao-component.component.css']
})
export class AgendarAvaliacaoComponentComponent implements OnInit {

  agendaForm: FormGroup;

  constructor(private headerService: HeaderService, private agendarAvaliacaoService: AgendarAvaliacaoService, private formBuilder: FormBuilder) { }
  
  // ao iniciar
  ngOnInit(): void {
    this.headerService.setTitle('Agendar Avaliação')

    this.agendaForm = new FormGroup({
      'ginasioId': new FormControl(null, Validators.required),
      'dataAgendamento': new FormControl(null, Validators.required)
    })
  }

  onSubmit(): void {
    // chamar a funcao agenda do meu servico (o subscribe espera pela resposta da funcao agenda)
    this.agendarAvaliacaoService.agenda(this.agendaForm.value).subscribe({
      next: data => {
        console.log(data)
      }, error: erro => {
        console.log(erro)
      }
    });
  }
  

}