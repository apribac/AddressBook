import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  http: any;
  PhoneList:any=[];


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

  addItem(){
  //  alert(this.book.FirstName.toString());
  this.addMandatoryClass();
  if(this.FirstName =="" || this.LastName =="" || this.Address =="" ||  this.Phone =="" ){
  //  alert("All field are required!");
  //  this.addMandatoryClass();
  }
  else
      {

        this.service.getAddressbookPhone(this.Phone).subscribe(data=>{
          this.PhoneList=data;
          if(data.length > 0) {
            alert('Phone number already exist!');
          }
          else
          {

            var val = {Id:this.Id,FirstName:this.FirstName,LastName:this.LastName,Address:this.Address,Phone:this.Phone}
            this.service.addAddressbook(val).subscribe(res=>{
            alert(res.toString());
            });

          }
        });
       

      }
   }
  updateItem(){
    if(this.FirstName =="" || this.LastName =="" || this.Address =="" ||  this.Phone =="" ){
     // alert("All field are required!");
      this.addMandatoryClass();
    }

     else
     {
  
          var val = {Id:this.Id,FirstName:this.FirstName,LastName:this.LastName,Address:this.Address,Phone:this.Phone}
        //alert(val.FirstName + "" + val.Id);
          this.service.updateAddressbook(val).subscribe(res=>{
          alert(res.toString());
        });

      }
 
  }


  addMandatoryClass(){
    var el = document.getElementById('fname');
    if(this.FirstName ==""){
      el?.classList.add('is-invalid');
    }else{
      el?.classList.remove('is-invalid');
    }
    el = document.getElementById('lname');
    if(this.LastName ==""){
      el?.classList.add('is-invalid');
    }else{
      el?.classList.remove('is-invalid');
    }
    el = document.getElementById('address');
    if(this.Address ==""){
      el?.classList.add('is-invalid');
    }else{
      el?.classList.remove('is-invalid');
    }
    el = document.getElementById('phone');
    if(this.Phone ==""){
      el?.classList.add('is-invalid');
    }else{
      el?.classList.remove('is-invalid');
    }
  }

 // findPhone(){
   // alert('Phone control clicked !');
//   var phone =this.Phone;
 //  alert('Phone control clicked !' + phone);
// this.http.getdataFromServer("api/AddressBook/phone").subscribe((resp:any)) =>{ 
 // var this.existEmail = false;
 // var email = this.employeeForm.controls["email"].value

 //     this.http.getDataFromServer("http://localhost:52044/api/Addressbook/phone/" + phone).subscribe((resp:any) => {
  //    var data = resp.data.employee;
  


 //     });

//    }
  findPhone(){
    this.service.getAddressbookPhone(this.Phone).subscribe(data=>{
      this.PhoneList=data;
      if(data.length > 0) {
        alert('Phone number already exist!');
      }
    });
  //  let url = 'http://localhost:52044/api/Addressbook/phone/1';
  // this.http.get(url).subscribe((res: { text: () => any; }) => console.log(res.text())); (1)
  }


}
