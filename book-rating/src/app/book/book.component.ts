import { Book } from './../shared/book';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Output() rated = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }

  get rateUpAllowed() {
    return this.book.rating < 5;
  }

  get rateDownAllowed() {
    return this.book.rating > -1;
  }
}
