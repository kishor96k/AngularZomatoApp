import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from './Services/common.service';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.loggedUserData);

  }
  constructor(
    private Http: HttpClient,
    private Service: CommonService
  ) {
    const isloggedUser = localStorage.getItem('Zomato_User');
    if (isloggedUser != null) {
      this.loggedUserData = JSON.parse(isloggedUser);
    }
  }

  AddUserForm!: FormGroup;
  title = 'Zomato';
  loggedUserData: any;

  UserObj: any = {
    "userId": 0,
    "userName": "",
    "role": "Customer",
    "password": "",
    "mobileNo": "",
    "emailId": "",
    "restaurantId": 0
  }
  
  LoginObj: any = {
    "userName": "",
    "password": "",
  }

  // on log off user
  logOffUser() {
    alert("Succesfully logged Off!!!!");
    localStorage.removeItem('Zomato_User');
    this.loggedUserData = null;
  }
  // on login
  onLoginSubmit() {
    this.Service.Login(this.LoginObj).subscribe((res) => {
      if (res.result) {
        console.log(res, "regiter added");
        this.onCloseLogin();
        localStorage.setItem("Zomato_User", JSON.stringify(res.data));
        this.loggedUserData = res.data;
      }
      else {
        alert(res.message);
      }
    })
  }
  // open login modal
  onOpenLogin() {
    const model = document.getElementById('loginModal');
    if (model != null) {
      model.style.display = 'block';
    }
  }
  //close login modal
  onCloseLogin() {
    const model = document.getElementById('loginModal');
    if (model != null) {
      model.style.display = 'none';
    }
  }

  // on register
  onRegisterSubmit() {
    this.Service.Register(this.UserObj).subscribe((res) => {
      if (res.result) {
        console.log(res, "regiter added");
        this.onCloseRegister();
        localStorage.setItem("Zomato_User", JSON.stringify(res.data));
        this.loggedUserData = res.data;
      }
      else {
        alert(res.message);
      }
    })
  }

  // open register modal
  onOpenRegister() {
    const model = document.getElementById('registerModal');
    if (model != null) {
      model.style.display = 'block';
    }
  }



  // close register modal
  onCloseRegister() {
    const model = document.getElementById('registerModal');
    if (model != null) {
      model.style.display = 'none';
    }
  }




}
