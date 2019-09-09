import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {NotificationData} from '../../types/notificationsList';
import {UiApiService} from '../../../service/ui-api.service';
import {Localization} from '../../../static/localization';
import {NotificationAttempt} from '../../types/notificationAttempt';
import {switchMap} from 'rxjs/operators';
import {ApiService} from '../../../service/api.service';
import {get} from 'lodash-es'

export type NotificationAttemptData = {
  attempted: boolean
  attemptId?: number
}
export type NotificationWithAttempted = NotificationData & NotificationAttemptData

@Component({
  selector: 'app-notifications-list',
  template: `
    <app-notifications-list-component
        [list]="this.notificationList | async"
        (attemptClick)="onAttemptClick($event)"
    >
    </app-notifications-list-component>
  `,
})
export class NotificationsListPage implements OnInit {
  public notificationList: Observable<NotificationWithAttempted[]>

  static notificationAttemptedData(notificationId: number, attempts: NotificationAttempt[]): NotificationAttemptData {
    const attemptForData = attempts.find((attempt: NotificationAttempt) => attempt.notificationDataId === notificationId)
    return {
      attempted: !!attemptForData,
      attemptId: get(attemptForData, 'id')
    }
  }

  constructor(
      private uiApi: UiApiService,
      private loc: Localization,
      private api: ApiService,
  ) { }

  makeList() {
    this.notificationList = combineLatest(
      this.api.notificationsList(),
      this.uiApi.getUserId().pipe(
        switchMap(value => this.api.notificationAttemptsByUserId(value as number))
      ),
      (notifications: NotificationData[], attempts: NotificationAttempt[]): NotificationWithAttempted[] => notifications
        .map((notification: NotificationData): NotificationWithAttempted => ({
          ...notification,
          ...NotificationsListPage.notificationAttemptedData(notification.id, attempts),
        }))
    )
  }

  ngOnInit() {
    this.uiApi.setHeader(this.loc.headers.notificationManagement)
    this.makeList()
  }

  onAttemptClick(item: NotificationWithAttempted) {
    let actionObservable
    let successMessage: string
    if (item.attempted) {
      successMessage = this.loc.messages.disattempted
      actionObservable = this.api.deleteAttempt(item.attemptId as number)
    } else {
      successMessage  = this.loc.messages.attempted
      actionObservable = this.api.createAttempt(item.id)
    }
    actionObservable.subscribe(() => {
      this.makeList()
      this.uiApi.showToast(successMessage)
    }, () => {
      this.uiApi.showToast(this.loc.errorMessages.tryAgainLater)
    })
  }
}
