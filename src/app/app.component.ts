import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    // Я так понимаю, это отличное место для того, что бы подгружать данные из LocalStorage, но я его не использовал,
    // так как функционал удаления продукта не реализован.
  }
}
