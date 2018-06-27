import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-events',
  templateUrl: './demo-form-with-events.component.html'
})
export class DemoFormWithEventsComponent implements OnInit {

  // 컨트롤에서 값의 변경 여부를 주시해야 할 때!!!
  // FromGroup, FormControl에는 변경 여부를 관찰하는 EventEmitter가 제공됨
  // 1. control.valueChanges를 호출하여 EventEmitter를 액세스한다. 
  // 2. subscribe메소드를 사용하여 옵저버를 추가한다.

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ["", Validators.required]
    });

    // sku필드의 변경감지
    this.myForm.controls['sku'].valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to: ', value)
      }
    );

    // 폼 전체의 변경감지
    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to: ', form)
      }
    )
  }

  ngOnInit() {
  }

  
  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
