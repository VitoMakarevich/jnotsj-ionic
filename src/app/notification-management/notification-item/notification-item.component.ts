import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NotificationDataWithAttemptedStatus} from '../types/notificationsList';
import {Localization} from '../../static/localization';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent {

  @Input()
  item: NotificationDataWithAttemptedStatus

  @Output()
  attendNotification: EventEmitter<NotificationDataWithAttemptedStatus> = new EventEmitter()

  onAttendClick() {
    this.attendNotification.emit(this.item)
  }

  constructor(public loc: Localization) { }

  isItemDisabled() {
    return this.item.endDate.isBefore()
  }
}
