import { Component, OnInit } from '@angular/core';
import {UiApiService} from '../../../service/ui-api.service';
import {Localization} from '../../../static/localization';
import {NotificationDataRequest} from '../../store/types/notificationsList';
import {RootState} from '../../../reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-add-notification.container',
  template: `<app-add-notification (createNotification)="onSubmit($event)"> </app-add-notification>`,
})
export class AddNotificationPage implements OnInit {

  constructor(
      private UIApi: UiApiService,
      private localization: Localization,
      private store: Store<RootState>
  ) { }

  ngOnInit() {
    this.UIApi.setHeader(this.localization.headers.createNotification)
  }

  onSubmit(data: NotificationDataRequest) {
    debugger
  }
}
