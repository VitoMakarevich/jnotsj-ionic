import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {SignInBegin} from '../../store/actions/signIn';
import {SignInRequest} from '../../store/types/SignIn';
import {UiApiService} from '../../../service/ui-api.service';
import {Localization} from '../../../static/strings';
import {RootState} from '../../../reducer';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.container.html',
})
export class SignInPage implements OnInit {
  constructor(
      private store: Store<RootState>,
      private uiApi: UiApiService,
      private localization: Localization,
  ) { }

  ngOnInit() {
    this.uiApi.setHeader(this.localization.headers.signIn)
  }

  onSubmitted(formData: SignInRequest) {
    this.store.dispatch(new SignInBegin(formData))
  }
}
