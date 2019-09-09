import { Component, OnInit } from '@angular/core';
import {UiApiService} from '../../../service/ui-api.service';
import {Localization} from '../../../static/localization';
import {NotificationDataRequest} from '../../types/notificationsList';
import {ApiService} from '../../../service/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-notification.container',
  template: `<app-add-notification (createNotification)="onSubmit($event)"> </app-add-notification>`,
})
export class AddNotificationPage implements OnInit {

  constructor(
      private UIApi: UiApiService,
      private localization: Localization,
      private apiService: ApiService,
      private router: Router,
  ) { }

  ngOnInit() {
    this.UIApi.setHeader(this.localization.headers.createNotification)
  }

  onSubmit(data: NotificationDataRequest) {
    this.apiService.createNotification(data).subscribe(() => {
      return this.router.navigate(['notification'])
    })
  }
}
