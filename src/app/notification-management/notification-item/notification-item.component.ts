import {Component, Input} from '@angular/core';
import {NotificationDataWithAttemptedStatus} from '../store/types/notificationsList';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent {

  @Input()
  item: NotificationDataWithAttemptedStatus

  constructor() { }

  isItemDisabled() {
    return this.item.endDate.isBefore()
  }
}
