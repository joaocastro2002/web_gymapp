import { Component, OnInit } from '@angular/core';
import { DropdownCompararService } from '../services/dropdown-comparar.service';
import { DropCompararService } from 'src/app/aluno/comparar-avaliacao-fisica/dropdown-comparar/services/drop-comparar.service';
import { SessionManagerService } from 'src/app/auth/services/session-manager-service.service';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-comparar',
  templateUrl: './dropdown-comparar.component.html',
  styleUrls: ['./dropdown-comparar.component.css'],
})
export class DropdownCompararComponent implements OnInit {

  dataAgendamento = []

  mySelect = '2';
  selectedValue: any;

  constructor(
    private dropdownCompararService: DropdownCompararService, 
    private dropCompararService: DropCompararService,
    private sessionManager: SessionManagerService,
    private token: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    // this.selectedValue = this.dropCompararService.getDropDownText(this.selectedValue, this.datas)[0].valor;
    this.dropdownCompararService.getDataAvaliacao().subscribe({
      next:avaliacoes => {

        for (let avaliacao of avaliacoes) {

            let data = avaliacao.data.split('T')[0]
            this.dataAgendamento.push(data)

        }
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
    this.selectedValue = this.dropCompararService.getDropDownText(this.selectedValue, this.dataAgendamento)[0].valor;
  }
}
