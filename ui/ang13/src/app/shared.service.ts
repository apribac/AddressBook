import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:52044/api";
  constructor(private http:HttpClient) { }

  getAddressbookList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Addressbook');
  }

  addAddressbook(val:any){
    return this.http.post(this.APIUrl+'/Addressbook',val);
  }

  updateAddressbook(val:any){
    return this.http.put(this.APIUrl+'/Addressbook',val);
  }

  deleteAddressbook(val:any){
    return this.http.delete(this.APIUrl+'/Addressbook/'+val);
  }

  getAddressbookPhone(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Addressbook/phone/' + val);
  }

//  getAllNames():Observable<any[]>{
 //   return this.http.get<any[]>(this.APIUrl+'/Addressbook/GetAllNames');
 // }

}
