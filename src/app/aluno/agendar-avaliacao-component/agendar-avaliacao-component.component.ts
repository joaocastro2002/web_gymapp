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
  // caso tenha mobilidade recebo um array de nomes do tipo Interface - vou buscar as declarações - declarado no service
  nome: INomesGinasios[] = [];
  // agendaForm é do tipo FormGroup
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
  
  // local onde o código vai ser guardado logo que a classe/component é executada
  ngOnInit(): void {
    this.headerService.setTitle('Agendar Avaliação')

    // para declarar as variáveis do Forms
    this.agendaForm = new FormGroup({
      'ginasioId': new FormControl(null, Validators.required),
      'dataAgendamento': new FormControl(null, Validators.required)
    })

    // função que vai buscar os dados 
    this.getData()
  }

  getData() {
    // this.selectedValue = this.dropCompararService.getDropDownText(this.selectedValue, this.datas)[0].valor;
    this.dropGinasiosService.getNomeGinasio().subscribe({
      next:data => {
        // se houver mobilidade recebemos um array porque o aluno está registado na marca e recebemos vários arrays
        if(data instanceof Array){
          this.nome = data  
        }
        else{
          // estamos a meter o objeto dentro do array (tipo o "append") para ser possível
          this.nome.push(data)
        }

        console.log(this.nome)
        
        
      },
      error: error => {
        // se o erro for de 401 - erro no token
        if (error.status == 401) {
          // vamos esperar receber dados da função getNewToken - pedir um novo Token
          // se chegar os dados vai guardar o token e executar senão vai mandar para o login de novo
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

  // para mudar os valores que estão selecionados na BD
  selectChange() {
    // para mudar os valores no dropdown para a caixa de texto ao selecionar numa data - recebemos um array mas com apenas um elemento que tem o id do que selecionei [0]
    // o id é o selectedValue e o objeto é o nome - temos de ver se o id corresponde ao nome
    this.selectedValue = this.dropdownGinasiosService.getDropDownText(this.selectedValue, this.nome)[0].valor;
  }

  handleOptionChange() {
    console.log(this.selectChange);
  }

  showMsg: boolean = false;
  error: boolean = false;
  errorMsg: string;

  // quando submetermos o formulário se der certo mostra uma mensagem de sucesso senão de erro
  // na linha 106 vai levar para o Service que faz o post, vai ficar à espera da resposta e depois mediante essa resposta vai mostrar algo
  onSubmit(mySelect): void {
    // chamar a funcao agenda do meu servico (o subscribe espera pela resposta da funcao agenda)
    this.agendarAvaliacaoService.agenda(this.agendaForm.value).subscribe({
      next: data => {
        console.log(data)
        this.error = false;
        this.showMsg = true;
      }, error: erro => {

        // se a minha sessão já não for válida manda para o login
        if (erro.status == 401) {

          this.sessionManager.getNewToken().subscribe({
            next: data => {
              this.token.saveToken(data.token)

              this.onSubmit(mySelect)
            },
            error: error => {
              console.log(error)
              this.router.navigate(['/login'])
            }
          })
        }
        // caso seja erro 500
        else{
          this.showMsg = true;
          this.errorMsg = erro.error;
          console.error(erro.error)
          this.error = true;
        }
      }
    });
  }
}
