import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  Books:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetBooks().subscribe(res => {
      console.log(res)
      this.Books =res;
    });    
  }
  onUpdate(id: any): any {
    const updatedData = "";

    this.crudService.UpdateBook(id, updatedData)
    .subscribe(res => {
      console.log('Book updated successfully:', res);
    })
  }
}
