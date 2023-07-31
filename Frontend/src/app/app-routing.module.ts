import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';

//import { ListallComponent } from './pages/product/listall/listall.component';
//import { EditproductComponent } from './pages/product/edit/editproduct.component';


import { RegisterComponent } from './pages/register/register.component';
import { SearchbynameComponent } from './pages/searchbyname/searchbyname.component';
import { UploadImgComponent } from './pages/upload-img/upload-img.component';

const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path:'login' , component:LoginComponent} , 
  {path:'searchbyname' , component:SearchbynameComponent}, 
{path:'myaccount',component:MyprofileComponent}, 
{path:'dashboard',component:DashboardComponent},
{path:'changepassword', component:ChangepasswordComponent},
{path:'uploadimg',component:UploadImgComponent},
{path:'', component:MyprofileComponent},
{path:'contactUs',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
