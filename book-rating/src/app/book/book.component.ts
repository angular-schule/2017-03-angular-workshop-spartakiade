import { Book } from './../shared/book';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

  rateUp() {
    console.log('Buch wurde bewertet!');
    this.book.rateUp();
  }

  rateDown() {
    this.book.rateDown();
  }

  get rateUpAllowed() {
    return this.book.rating < 5;
  }

  get rateDownAllowed() {
    return this.book.rating > -1;
  }
}
