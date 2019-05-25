import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  private signInForm: FormGroup;

  @Output()
  signIn = new EventEmitter()

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
        login: ['', Validators.required],
        password: ['', Validators.required],
    })
  }

  handleSubmit() {
    this.signIn.emit(this.signInForm.value)
  }
}
