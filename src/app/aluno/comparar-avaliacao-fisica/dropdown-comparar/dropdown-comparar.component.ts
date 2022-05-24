import { Component, OnInit } from '@angular/core';
import { DropdownCompararService, IDropdownService } from '../services/dropdown-comparar.service';
import { DropCompararService } from 'src/app/aluno/comparar-avaliacao-fisica/dropdown-comparar/services/drop-comparar.service';

@Component({
  selector: 'app-dropdown-comparar',
  templateUrl: './dropdown-comparar.component.html',
  styleUrls: ['./dropdown-comparar.component.css'],
})
export class DropdownCompararComponent implements OnInit {

  datas: IDropdownService[] = []

  mySelect = '2';
  selectedValue: any;

  constructor(private dropdownCompararService: DropdownCompararService, private dropCompararService: DropCompararService) { }

  ngOnInit(): void {
    // this.datas = [{valor: '17/01/2022'},
    // {valor: '17/02/2022'},
    // {valor: '17/03/2022'},
    // {valor: '17/04/2022'},
    // {valor: '17/05/2022'},
    // {valor: '17/06/2022'},
    // {valor: '17/07/2022'},
    // {valor: '17/08/2022'},
    // {valor: '17/09/2022'},
    // {valor: '17/09/2022'},
    // {valor: '17/09/2022'},
    // {valor: '17/09/2022'},
    // {valor: '17/09/2022'},
    // {valor: '17/09/2022'},
    // {valor: '17/09/2022'},
    // {valor: '17/09/2022'}]
    this.getData()
  }

  getData() {
    // this.selectedValue = this.dropCompararService.getDropDownText(this.selectedValue, this.datas)[0].valor;
    this.dropdownCompararService.getDataAvaliacao().subscribe({
      next:data => {
        this.datas = data
      },
      error: error => {
        console.log(error)
      }
    })
  }

  selectChange() {
    this.selectedValue = this.dropCompararService.getDropDownText(this.selectedValue, this.datas)[0].valor;
  }
}
