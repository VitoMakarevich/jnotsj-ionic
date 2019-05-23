import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {SignInRequest} from '../../../store/types/SignIn';
import {RootState} from '../../../reducer';
import {SignInBegin} from '../../store/actions/signIn';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.container.html',
})
export class SignInPage implements OnInit {
  constructor(private store: Store<RootState>) { }

  ngOnInit() {}

  onSubmitted(formData: SignInRequest) {
    this.store.dispatch(new SignInBegin(formData))
  }

}
