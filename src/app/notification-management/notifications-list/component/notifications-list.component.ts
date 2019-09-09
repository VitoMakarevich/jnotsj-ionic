import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NotificationData} from '../../types/notificationsList';
import {NotificationWithAttempted} from '../container/notifications-list.container';

@Component({
  selector: 'app-notifications-list-component',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss'],
})
export class NotificationsListComponent {

  @Input()
  list: NotificationData[]

  @Output()
  attemptClick: EventEmitter<NotificationWithAttempted> = new EventEmitter()

  onAttemptClick(item: NotificationWithAttempted) {
    this.attemptClick.emit(item)
  }

  constructor() { }
}
