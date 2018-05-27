import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  personalInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.personalInfoForm = this.formBuilder.group(

      {
        name: ['', [Validators.required, Validators.pattern(/[a-zA-Z].*/)]],
        surname: ['', [Validators.required, Validators.pattern(/[a-zA-Z].*/)]],
        age: ['', [Validators.required, Validators.min(1),Validators.max(99)]],
      })
  }

  save(): void {
    console.log('zapisz');
  }

  clear(): void {
    this.personalInfoForm.reset();
  }

}
