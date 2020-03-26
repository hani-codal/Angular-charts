import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // title = 'meetingDemo';
  // // isTrue = false;
  // // Clicked(){
  // //   window.alert("hello hani");
  // // }
  
  // userDetail = new FormGroup({
  //   name : new FormControl (''),
  //   Address : new FormGroup({
  //     city : new FormControl(''),
  //     state : new FormControl (''),
  //     contry : new FormControl('')
  //   })
  // });

  // onSubmit(){
  //   console.log ("user details : ",this.userDetail.value.Address.city)
  // }

  // updateDetails(){
  //   this.userDetail.patchValue({
  //     Address :{
  //       city : "hani"
  //     }
  //   })
  // }

}
