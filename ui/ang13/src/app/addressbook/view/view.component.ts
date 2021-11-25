import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() book:any;
  Id!:string;
  LastName!:string;
  FirstName!:string;
  Address!:string;
  Phone!:string;

  ngOnInit(): void {
    this.Id=this.book.Id;
    this.FirstName=this.book.FirstName;
    this.LastName=this.book.LastName;
    this.Address=this.book.Address;
    this.Phone=this.book.Phone;
  }

}
