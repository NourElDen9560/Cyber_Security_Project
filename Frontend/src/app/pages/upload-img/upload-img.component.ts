import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {
ImdData= new FormGroup({
img:new FormControl('' , Validators.required) 

}) 

safeOrNot  = true;
  constructor(private user:UserapiService , private router:Router) { }
NewImage:any

  ngOnInit(): void {
  }
  getImage(event:any){
this.NewImage = event.target.files[0]
console.log(this.NewImage)
  }
  UploadImage(){
    const Form = new FormData();
    console.log( this.NewImage.name)
console.log( this.NewImage.size)   
if( this.NewImage.size < 1048576){ //1M 
    Form.append("img" , this.NewImage , this.NewImage.name);
    this.safeOrNot = false;
}
else{
  this.safeOrNot=true;
}
this.user.UploadImage(Form).subscribe(
  (res)=>{
   
  },
  (err)=>{console.log(err) ,this.safeOrNot = false },
  ()=>{
    
this.router.navigate(['/myaccount']);
    console.log("Done Uploading")

  }
)
  }

}
