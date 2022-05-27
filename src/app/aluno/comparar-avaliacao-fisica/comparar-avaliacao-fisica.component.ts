import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { HeaderService } from '../../header/services/header.service';
import { DropGinasiosService } from '../agendar-avaliacao-component/services/drop-ginasios.service';
import { DropdownGinasiosService } from '../agendar-avaliacao-component/services/dropdown-ginasios.service';
import { CompararAvaliacaoService, ICompararAvaliacaoService } from './services/comparar-avaliacao.service';
import { DropCompararService } from './services/drop-comparar.service';
import { DropdownCompararService, IDatasAvaliacoes } from './services/dropdown-comparar.service';

@Component({
  selector: 'app-comparar-avaliacao-fisica',
  templateUrl: './comparar-avaliacao-fisica.component.html',
  styleUrls: ['./comparar-avaliacao-fisica.component.css']
})
export class CompararAvaliacaoFisicaComponent implements OnInit {

  // inicio o dropdwon com o valor 2 - para o primeiro drropdwon
  mySelect = '2';
  mySelect2 = '3';
  // pode receber qualquer tipo
  selectedValue: any;
  selectedValue2: any;
  // vamos receber um array para as datas das avaliacoes - recebemos também um id porque a uma dasta está associado um id - precisamos desse id para ir buscar os dados da avaliaccao
  datasAval: IDatasAvaliacoes[] = [];
  // declaracao do form - o nome
  avaliacaoForm: FormGroup;

  // vou ter um objeto avaliacao - vou ter duas avaliacoes
  avaliacao0 : ICompararAvaliacaoService;
  avaliacao1 : ICompararAvaliacaoService;

  constructor(
    private headerService: HeaderService, 
    private compararAvaliacaoService: CompararAvaliacaoService, 
    private formBuilder: FormBuilder,
    private dropdownCompararService: DropdownCompararService, 
    private dropCompararService: DropCompararService,
    private sessionManager: SessionManagerService,
    private token: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // para mudar o titulo da página
    this.headerService.setTitle('Comparar Avaliações')

    // dizer quais são is inputs do formulário
    this.avaliacaoForm = new FormGroup({
      // form control vamos buscar à classe para ficarem todos arredondados - fica já com o css
      'avaliacao_id_0': new FormControl(null, Validators.required),
      'avaliacao_id_1': new FormControl(null, Validators.required),
      'data': new FormControl(null, Validators.required)
    })

    this.getData()
  }

  getData(){

    // para o dropdown - fica à espera de ir buscar as datas
    this.dropdownCompararService.getDataAvaliacao().subscribe({
      // se receber dados
      next:data => {
        // vai percorrer os dados e para cada data recebida vai meter em formato pt 
        for(let avaliacao of data){
          avaliacao.data = new Date(avaliacao.data).toLocaleString("pt-pt").split(",")[0]
        }
        
        // se os dados forem recebidos como array guardo logo na variável datas
        // pode haver mais que uma data de avaliação
        if(data instanceof Array){
          this.datasAval = data
        }
        // se apenas tiver uma data, para esta aparecer no dropdown tenho que a meter dentro de um array
        else{
          // estamos a meter o objeto dentro do array (tipo o "append")
          this.datasAval.push(data)
        }

        // vamos ordenar as datas
        // o 0000 é simplesmente para meter as horas a 0 e ver se um dia é maior que o outro pela meia noite
        this.datasAval.sort((data1, data2) => new Date(data1.data).setHours(0,0,0,0) - new Date(data2.data).setHours(0,0,0,0))
        // vamos meter as datas de forma inversa - mostrar primeiro as datas mais recentes
        this.datasAval = this.datasAval.reverse()
        console.log(this.datasAval)
        
        
      },
      error: error => {
        // se der erro no token vou gerar um novo, senão (expirou) manda para o login
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
    // o valor que estiver selecionado vai para a variável selectedValue
    // vai igualar o selectedValue - as filtragens retornam um array com um item, com o id que queremos e vamos passar esse id para o SelectedValue
    this.selectedValue = this.dropCompararService.getDropDownText(this.selectedValue, this.datasAval)[0].valor;
    this.selectedValue2 = this.dropCompararService.getDropDownText(this.selectedValue2, this.datasAval)[0].valor;
  }

  handleOptionChange() {
    console.log(this.selectChange);
  }
  
  // nao submeter o que selecionei nas dropdwons, se não der erro vou ter que ir fazer um pedido à API para ir buscar os dados
  onSubmit(mySelect, mySelect2): void {
    // console.log(this.avaliacaoForm.value.avaliacao_id_0, this.avaliacaoForm.value.avaliacao_id_1)
    this.compararAvaliacaoService.getDadosAvaliacao(this.avaliacaoForm.value.avaliacao_id_0).subscribe({
      next: data => {
        // vai buscar os dados que recebeu no form ao preencher (da avaliacao_id_0)
        this.avaliacao0 = data;
        // se não der erro vamos printar os dados que enviamos (as datas neste caso)
        console.log(data)
      }, error: erro => {

        // se a minha sessão já não for válida manda para o login
        if (erro.status == 401) {

          this.sessionManager.getNewToken().subscribe({
            next: data => {
              this.token.saveToken(data.token)

              this.onSubmit(mySelect, mySelect2)
            },
            error: error => {
              console.log(error)
              this.router.navigate(['/login'])
            }
          })
        }
      }
    })

    this.compararAvaliacaoService.getDadosAvaliacao(this.avaliacaoForm.value.avaliacao_id_1).subscribe({
      next: data => {
        this.avaliacao1 = data;
        // se não der erro vamos printar os dados que enviamos (as datas neste caso)
        console.log(data)
      }, error: erro => {

        // se a minha sessão já não for válida manda para o login
        if (erro.status == 401) {

          this.sessionManager.getNewToken().subscribe({
            next: data => {
              this.token.saveToken(data.token)

              this.onSubmit(mySelect, mySelect2)
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
}
