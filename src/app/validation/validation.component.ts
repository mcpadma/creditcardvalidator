import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

cardImg = "";

myForm: FormGroup;
  userInfo: {creditCard: string} = {creditCard: ''};
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'creditCard': ['', [Validators.required, Validators.minLength(14), Validators.maxLength(16),this.creditCardValidator.bind(this)]],
      'expiry':['',[Validators.required, Validators.minLength(3), this.expiryValidator.bind(this)]],
      // 'phone': ['', this.phoneValidator.bind(this)],
      // 'email': ['', [Validators.required, this.emailValidator.bind(this)]],
      // 'password':['',[Validators.required,Validators.minLength(4), Validators.maxLength(20),this.passwordValidator.bind(this)]]
    });
  }
onSubmit() {
    console.log('submitting form');
  }

  isValid(field: string) {
    let formField = this.myForm.get(field);
    return formField.valid || formField.pristine;
  }

  creditCardValidator(control: FormControl): {[s: string]: boolean} {
    // if (!control.value.match("^4")) {
    //   return {invalidName: true};
    // }
    if(control.value.match("^4")){
      console.log("valid no");
      let visaNum = this.userInfo.creditCard
      this.cardImg = "../assets/Bvisa.png";
    }
    else if(control.value.match("^3[47]")){
      console.log("valid no");
      this.cardImg = "../assets/Bamex.png";
    }
    else if(control.value.match("^5[1-5]")){
      console.log("valid no");
      this.cardImg = "../assets/Bmastercard.png";
    }
    else if(control.value.match("^36")){
      console.log("valid no");
      this.cardImg = "../assets/Bdine.png";
    }
    else if(control.value.match("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)")){
      console.log("valid no");
      this.cardImg = "../assets/Bdiscover.png";
    }
    else{
      return {invalidName: true}
    }
    // else if(!control.value.match("^3[47]")){
    //   return {invalidName: true};
    // }
    // else if(!control.value.match("^5[1-5]")){
    //   return {invalidName: true};
    // }
    // else if(!control.value.match("^36")){
    //   return {invalidName: true};
    // }
    // else if(!control.value.match("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)")){
    //   return {invalidName: true};
    // }
  }

expiryValidator(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
      return {invalidCompany: true};
    }
  }
  // passwordValidator(control: FormControl): {[s: string]: boolean} {
  //   if (control.value !== '') {
  //     if (!control.value.match('^[^A-Za-z0-9]')) {
  //       return {invalidPassword: true};
  //     }
  //   }
  // }
//  emailValidator(control: FormControl): {[s: string]: boolean} {
//    if (control.value !== '') {
//       if (!control.value.match('^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$')) {
//         return {invalidEmail: true};
//       }
//     }
//  }
}
