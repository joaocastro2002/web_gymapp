import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { HeaderService } from 'src/app/header/services/header.service';
import { AgendarAvaliacaoService } from './services/agendar-avaliacao.service';
import { DropGinasiosService, INomesGinasios } from './services/drop-ginasios.service';
import { DropdownGinasiosService } from './services/dropdown-ginasios.service';

@Component({
  selector: 'app-agendar-avaliacao-component',
  templateUrl: './agendar-avaliacao-component.component.html',
  styleUrls: ['./agendar-avaliacao-component.component.css']
})
export class AgendarAvaliacaoComponentComponent implements OnInit {

  mySelect = '2';
  selectedValue: any;
  // caso tenha mobilidade recebo um array de nomes
  nome: INomesGinasios[] = [];
  agendaForm: FormGroup;

  constructor(
    private headerService: HeaderService, 
    private agendarAvaliacaoService: AgendarAvaliacaoService, 
    private formBuilder: FormBuilder,
    private dropdownGinasiosService: DropdownGinasiosService, 
    private dropGinasiosService: DropGinasiosService,
    private sessionManager: SessionManagerService,
    private token: TokenStorageService,
    private router: Router) { }
  
  // ao iniciar
  ngOnInit(): void {
    this.headerService.setTitle('Agendar Avaliação')

    this.agendaForm = new FormGroup({
      'ginasioId': new FormControl(null, Validators.required),
      'dataAgendamento': new FormControl(null, Validators.required)
    })

    this.getData()
  }

  getData() {
    // this.selectedValue = this.dropCompararService.getDropDownText(this.selectedValue, this.datas)[0].valor;
    this.dropGinasiosService.getNomeGinasio().subscribe({
      next:data => {

        if(data instanceof Array){
          this.nome = data  
        }
        else{
          // estamos a meter o objeto dentro do array (tipo o "append")
          this.nome.push(data)
        }

        console.log(this.nome)
        
        
      },
      error: error => {

        if (error.status == 401) {

          this.sessionManager.getNewToken().subscribe({
            next: data => {
              this.token.saveToken(data.token)

              this.getData()
              
            },
            error: error => {
              console.log(error)
              this.router.navigate(['/login'])
            }
          })
        }
      }
    })
  }

  selectChange() {
    // para mudar os valores no dropdown para a caixa de texto ao selecionar numa data
    this.selectedValue = this.dropdownGinasiosService.getDropDownText(this.selectedValue, this.nome)[0].valor;
  }

  handleOptionChange() {
    console.log(this.selectChange);
  }

  showMsg: boolean = false;
  error: boolean = false;
  errorMsg: string;

  onSubmit(mySelect): void {
    // chamar a funcao agenda do meu servico (o subscribe espera pela resposta da funcao agenda)
    this.agendarAvaliacaoService.agenda(this.agendaForm.value).subscribe({
      next: data => {
        console.log(data)
        this.error = false;
        this.showMsg = true;
      }, error: erro => {
        this.showMsg = true;
        this.errorMsg = erro.error;
        console.error(erro.error)
        this.error = true;
      }
    });
  }
  

}
