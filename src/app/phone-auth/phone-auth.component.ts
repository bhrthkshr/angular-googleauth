import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';

import * as firebase from 'firebase';

export class PhoneNumber{
 country: string;
 number: string;

 get e164(){
   const num= this.country + this.number
   return `+${num}`
 }
};


@Component({
  selector: 'app-phone-auth',
  templateUrl: './phone-auth.component.html',
  styleUrls: ['./phone-auth.component.scss']
})
export class PhoneAuthComponent implements OnInit {

  windowRef: any;
   
  phoneNumber = new PhoneNumber()

  verificationCode: string;

  user: any;

  constructor(private win: WindowService) { }

  ngOnInit() {
  this.phoneNumber.country = '+91'
  this.phoneNumber.number = '8792006058'
  this.windowRef = this.win.windowRef
  this.windowRef.recaptchaVerifier= new firebase.auth.RecaptchaVerifier('recaptcha-container')

  this.windowRef.recaptchaVerifier.render()
  }

  sendLoginCode(){
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num,appVerifier)
      .then(result => {
        this.windowRef.confirmationResult = result;
      })
      .catch(error => console.log(error));
  }

  verfiyLoginCode(){
    this.windowRef.confirmationResult
    .confirm(this.verificationCode)
    .then(result => {
      this.user = result.user;
    })
    .catch(error => console.log(error,'Incorrect Code entered'));
  }

}
