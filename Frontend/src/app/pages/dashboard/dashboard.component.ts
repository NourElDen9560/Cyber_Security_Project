import {  OnInit } from '@angular/core';
import { Component, PipeTransform } from '@angular/core';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { UserapiService } from 'src/app/services/userapi.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  AllUserData=[];
  constructor(public user:UserapiService ) { }
  
  ngOnInit(): void {
    this.user.dashboard().subscribe(

      res=>{
this.AllUserData = res.data; 
console.log(this.AllUserData)

      } , 
      err=>(console.log(err)) , 
      ()=>{

      }
    )
  }

}
