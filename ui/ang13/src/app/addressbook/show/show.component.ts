import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:SharedService) { }

  AddressbookList:any=[];

  ModalTitle: string='';
  ActivateAddEdit:boolean=false;
  book:any;
  p:number = 1;
  ActivateAddEdit1:boolean=false;


  IdFilter:string="";
  FirstNameFilter:string="";
  LastNameFilter:string="";
  AddressFilter:string="";
  PhoneFilter:string="";
  ListFilter:any=[];
  
  ngOnInit(): void {
    this.refreshList();
  }

  addClick(){
    this.book={
      Id:0,
      FirstName:"",
      LastName:"",
      Address:"",
      Phone:""
    }
    this.ModalTitle="Add Item";
    this.ActivateAddEdit=true;

  }
  editClick(item:any){
    this.book=item;
    this.ModalTitle="Edit Item";
    this.ActivateAddEdit=true;
  }

  deleteClick(item:any){
    if(confirm('Do you really want to delete ?')){
      this.service.deleteAddressbook(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshList();
      })
    }
  }

  viewClick(item:any){
    this.book=item;
    this.ModalTitle="View Item";
    this.ActivateAddEdit=true;
  }

  closeClick(){
    this.ActivateAddEdit=false;
    this.refreshList();
  }

  refreshList(){
    this.service.getAddressbookList().subscribe(data=>{
    this.AddressbookList=data;
    this.ListFilter=data;
    });
  }

  FilterFnc(){
    var ABIdFilter = this.IdFilter;
    var ABFirstNameFilter = this.FirstNameFilter;
    var ABLastNameFilter = this.LastNameFilter;
    var ABAddressFilter = this.AddressFilter;
    var ABPhoneFilter = this.PhoneFilter;

    this.AddressbookList = this.ListFilter.filter(function (element:any){
        return element.Id.toString().toLowerCase().includes(
          ABIdFilter.toString().trim().toLowerCase()
        )&&
        element.FirstName.toString().toLowerCase().includes(
          ABFirstNameFilter.toString().trim().toLowerCase()
        )&&
        element.LastName.toString().toLowerCase().includes(
          ABLastNameFilter.toString().trim().toLowerCase()
        )&&
        element.Address.toString().toLowerCase().includes(
          ABAddressFilter.toString().trim().toLowerCase()
        )&&
        element.Phone.toString().toLowerCase().includes(
          ABPhoneFilter.toString().trim().toLowerCase()
        )
    });
  }

}
