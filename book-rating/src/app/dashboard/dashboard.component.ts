import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Das beste Buch der Welt (ungelogen)', 5),
      new Book('999', 'Das andere Buch', 'doof')
    ];
  }
}
