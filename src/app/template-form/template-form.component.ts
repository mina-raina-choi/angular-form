import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('f') form: any;

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  model: Signup = new Signup();


  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log("Form Submitted!:", form);
    this.form.reset()
  }

}


class Signup {
  constructor(public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public password: string = '',
    public language: string = '') {
  }
}