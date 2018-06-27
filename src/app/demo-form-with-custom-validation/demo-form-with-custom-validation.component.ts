import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

// 구체적인 요구사항이 있다면...
function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return { invalidSku: true }
  }
}

@Component({
  selector: 'app-demo-form-with-custom-validation',
  templateUrl: './demo-form-with-custom-validation.component.html'
})
export class DemoFormWithCustomValidationComponent implements OnInit {
  myForm: FormGroup;


  // Validators.compose를 사용하면 여러개의 검증자를 둘 수 있다.
  // Validators.compose는 두 검증자를 감싸서 FormControl에 대입해준다.
  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required, skuValidator
      ])]
    })
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }


}
