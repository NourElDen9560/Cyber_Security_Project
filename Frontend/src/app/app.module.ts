import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';

import { HomeComponent } from './pages/home/home.component';

import { AuthInterceptor } from './services/interceptor/auth.interceptor';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';

import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { UploadImgComponent } from './pages/upload-img/upload-img.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {NgbPaginationModule, NgbAccordionModule , NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchbynameComponent } from './pages/searchbyname/searchbyname.component';
import { VerifyotpComponent } from './pages/verifyotp/verifyotp.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
  
    MyprofileComponent , ChangepasswordComponent, UploadImgComponent, ContactUsComponent, DashboardComponent, SearchbynameComponent, VerifyotpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule , 
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule    ,NgbPaginationModule,NgbModule,NgbAccordionModule,NgbPaginationModule,NgbCarouselModule
  
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS , useClass:AuthInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
