import { Component, ElementRef, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
login = new FormGroup({email:new FormControl('', Validators.required) ,
password:new FormControl('', Validators.required) 
})
otp = new FormGroup({otp:new FormControl('', Validators.required) })
 AllData=this.login.value;
  constructor(private data: UserapiService , private router: Router) { }
  ISLOGGED = false; 
  ErrorTestField = false;
  TimeoutField = false;
  FirstCheck = false;
  OtpCheck = true;
  ngOnInit(): void {
    this.ISLOGGED=false;
     
  }
  
Login(){

  console.log({...this.login.value , ...this.otp.value})
  this.data.LoginApi({...this.login.value , ...this.otp.value}).subscribe(
    res=>{
console.log(this.AllData);
 console.log(res.data.token)
        localStorage.setItem('UserToken', `${res.data.token}`)
        if(localStorage.getItem('photo'))
        localStorage.removeItem('photo')
        localStorage.setItem('photo' ,res.data.UserData.image )
      
    if(res.data.UserData.type == 'user'){
      this.data.AdminOrNot = false;
    }
    else if(res.data.UserData.type == 'admin'){
      this.data.AdminOrNot = true;
    }
   
    this.data.photo = res.data.UserData.image;
    console.log("***************************")
  console.log(this.data.photo);
    }
    ,
    err=>{
      this.OtpCheck = false;
      console.log(err)
    
    },
    ()=>{
this.router.navigate(["/"]);
    }
  )
}

  CheckValidation(){
    // console.log("test")
    this.data.CheckAndSendOtp(this.login.value).subscribe(
      res=>{
       
        
        /*console.log(res.data.token)
        localStorage.setItem('UserToken', `${res.data.token}`)
        if(localStorage.getItem('photo'))
        localStorage.removeItem('photo')
        localStorage.setItem('photo' ,res.data.UserData.image )
      
    if(res.data.UserData.type == 'user'){
      this.data.AdminOrNot = false;
    }
    else if(res.data.UserData.type == 'admin'){
      this.data.AdminOrNot = true;
    }
   
    this.data.photo = res.data.UserData.image;
    console.log("***************************")
  console.log(this.data.photo);*/
    },

      err=>{
        
        console.log("Here is the error message")
      console.log(err.error)
        if(typeof err.error === 'object'){
          this.TimeoutField = false;
          this.ErrorTestField=true;
        
    //    (<HTMLInputElement>document.getElementById("errormessage"))?.innerText = err.error;
        }
        if(typeof err.error === 'string'){
          this.ErrorTestField=false;
          this.TimeoutField = true;
        }
      
      },
      ()=>{
        this.FirstCheck = true;
       this.data.isLogin = true;
    
     console.log(this.data.AdminOrNot )
      this.AllData =this.login.value ; 
  
        
      }
    )
  }

}
function ViewChild(arg0: string) {
  throw new Error('Function not implemented.');
}

