import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookStoreService {
  books: Book[];

  constructor() {
    this.books = [
      new Book('000', 'Angular', 'Das beste Buch der Welt (ungelogen)', 5),
      new Book('999', 'Das andere Buch', 'doof'),
      new Book('222', ':-)', 'adsad', 3),
    ];
  }

  getAllBooks(): Book[] {
    return this.books;
  }

  getBook(isbn: string): Book | undefined  {
    return this.books.find(b => b.isbn === isbn);
  }
}
