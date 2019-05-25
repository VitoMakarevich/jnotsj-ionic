import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {RootState} from '../../reducer';
import {ToastState} from '../../store/reducers/toast';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {toastStateSelector} from '../../store/selectors/toast';

@Component({
    template: '',
  selector: 'app-toast',
})
export class ToastComponent implements OnInit, OnDestroy {
  private toastState$: Subscription;

  constructor(private toastController: ToastController, private store: Store<RootState>) { }

  private async presentToast(text: string) {
      const toast = await this.toastController.create({
          message: text,
          duration: 2000,
          position: 'bottom',
      });
      toast.present();
  }

  ngOnInit() {
    this.store.select(toastStateSelector).subscribe(
        (toastState: ToastState) => {
          const {shown, text} = toastState

          if (shown) {
            this.presentToast(text)
          }
        }
    )
  }

  ngOnDestroy() {
    this.toastState$.unsubscribe()
  }
}
