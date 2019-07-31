import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootState} from '../../../reducer';
import {NotificationsListBegin} from '../../store/actions/notificationsList';
import {notificationsListItems} from '../../store/selectors/notificationsList';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {NotificationData} from '../../store/types/notificationsList';
import {UiApiService} from '../../../service/ui-api.service';
import {Localization} from '../../../static/localization';
import {notificationsAttemptsListItems} from '../../store/selectors/notificationAttempts';
import {NotificationAttempt} from '../../store/types/notificationAttempt';
import {NotificationAttemptByUserBegin} from '../../store/actions/notificationAttempts';
import {StorageService} from '../../../storage/storage.service';
import {tap} from 'rxjs/operators';

export type NotificationWithAttempted = NotificationData & {attempted: boolean}

@Component({
  selector: 'app-notifications-list',
  template: `
    <app-notifications-list-component
        [list]="this.notificationList | async"
    >
    </app-notifications-list-component>
  `,
})
export class NotificationsListPage implements OnInit, OnDestroy {
  public notificationList: Observable<NotificationWithAttempted[]>

  private notificationAttempts$: Subscription

  static notificationIsAttempted(notificationId: number, attempts: NotificationAttempt[]): boolean {
    return attempts.some((attempt: NotificationAttempt) => notificationId === attempt.notificationDataId)
  }

  constructor(
      private store: Store<RootState>,
      private uiApi: UiApiService,
      private loc: Localization,
      private storage: StorageService
  ) { }

  ngOnInit() {
    this.notificationAttempts$ = this.storage.getUserId().pipe(
        tap((userId: number) => this.store.dispatch(new NotificationAttemptByUserBegin(userId)))
    ).subscribe()
    this.store.dispatch(new NotificationsListBegin())
    this.uiApi.setHeader(this.loc.headers.notificationManagement)
    this.notificationList = combineLatest(
        this.store.select(notificationsListItems),
        this.store.select(notificationsAttemptsListItems),
        (notifications: NotificationData[], attempts: NotificationAttempt[]): NotificationWithAttempted[] => notifications
            .map((notification: NotificationData) => ({
                ...notification,
                attempted: NotificationsListPage.notificationIsAttempted(notification.id, attempts),
            }))
    )
  }


  ngOnDestroy() {
    this.notificationAttempts$.unsubscribe()
  }
}
