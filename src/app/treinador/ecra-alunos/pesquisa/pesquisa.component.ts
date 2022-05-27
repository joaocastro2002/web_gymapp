import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit (){
     this.search();
  }

  search(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('Input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("alunosLista");
    li = ul.getElementsByTagName('li');
    var alunos = ul.getElementsByClassName("alunos");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        alunos[i].style.display = "block";
      }
      else
       {
        alunos[i].style.display = "none";
      }
    }
  }

}
