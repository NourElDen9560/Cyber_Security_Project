import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-searchbyname',
  templateUrl: './searchbyname.component.html',
  styleUrls: ['./searchbyname.component.css']
})
export class SearchbynameComponent implements OnInit {

  constructor(public user:UserapiService) { }
  UserData:User ={
    name:"" ,
    age: 0,
    email:"" ,
    password:"",
   
  }
  FilterName= new FormGroup({
    name:new FormControl('' , Validators.required)
  });
  ngOnInit(): void {
  }
  Search(){
    console.log(this.FilterName.value);
this.user.SearchByName(this.FilterName.value).subscribe(
  res=>{
this.UserData = res.data;

  } , 
  err=>console.log (err) ,
  ()=>{

  }
)
  }

}
