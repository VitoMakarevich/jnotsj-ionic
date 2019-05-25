import {Injectable} from '@angular/core';
import {RootState} from '../reducer';
import {Store} from '@ngrx/store';
import {ToastShow} from '../store/actions/toast';
import {HeaderChange} from '../store/actions/header';
import {SpinnerHide, SpinnerShow} from '../store/actions/spinner';

@Injectable({
  providedIn: 'root'
})
export class UiApiService {

  constructor(
      private store: Store<RootState>,
  ) {}

  public showToast(message: string, buttonValue: string) {
    this.store.dispatch(
        new ToastShow(
            message,
            buttonValue
        ),
    )
  }

  public showSpinner() {
      this.store.dispatch(new SpinnerShow())
  }

    public hideSpinner() {
        this.store.dispatch(new SpinnerHide())
    }

  public setHeader(text: string) {
      this.store.dispatch(
          new HeaderChange(text)
      )
  }
}
