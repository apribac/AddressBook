import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressbookComponent } from './addressbook/addressbook.component';
import { ShowComponent } from './addressbook/show/show.component';
import { AddEditComponent } from './addressbook/add-edit/add-edit.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewComponent } from './addressbook/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressbookComponent,
    ShowComponent,
    AddEditComponent,
    ViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
