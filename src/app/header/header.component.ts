import { Component, OnInit } from '@angular/core';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = ''

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.title.subscribe(updatedTitle => {
      this.title = updatedTitle
    })
  }

}
