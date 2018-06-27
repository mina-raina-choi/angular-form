import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  langs: string[] = [
    'English',
    'French',
    'German'
  ]

  myForm: FormGroup;
  firstName: FormControl; 
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  constructor() { 
  }

  ngOnInit() {
    this.createFormControls()
    this.createForm()
    // this.myForm = new FormGroup({
    //   name: new FormGroup({
    //     firstName: new FormControl('', Validators.required),
    //     lastName: new FormControl('', Validators.required)
    //   }),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern("[^ @]*@[^ @]*")
    //   ]),
    //   password: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(8)
    //   ]),
    //   language: new FormControl()
    // })
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('', Validators.required);
  }

  createForm() {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password,
      language: this.language
    })
  }

  onSubmit(form: any) {
    if (this.myForm.valid) {
      console.log("Form Submitted!:", form);
      this.myForm.reset();
    }
  }
}
