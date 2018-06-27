import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validations-explicit',
  templateUrl: './demo-form-with-validations-explicit.component.html'
})
export class DemoFormWithValidationsExplicitComponent implements OnInit {
  myForm: FormGroup;
  // AbstractControl마다 인스턴스변수를 만들고 싶지 않으므로 인스턴스변수없이 뷰에서 
  // FormControl을 참조할 수는 없을까?????
  // ==> myForm.controls를 사용하면 됨!!!

  // sku: AbstractControl; // FormControl의 추상객체???추상컨트롤??이 머지

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    // this.sku = this.myForm.controls['sku']
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
