import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  isbn: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['isbn'] as string)
      // .filter(isbn => isbn === '222')
      .subscribe((isbn) => this.isbn = isbn);
  }
}
