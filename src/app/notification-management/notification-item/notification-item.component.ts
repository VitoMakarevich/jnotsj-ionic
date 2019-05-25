import {Component, Input, OnInit} from '@angular/core';
import {NotificationDataWithAttemptedStatus} from '../store/types/notificationsList';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnInit {

  @Input()
  item: NotificationDataWithAttemptedStatus

  constructor() { }

  isItemDisabled() {
    return this.item.endDate.isBefore()
  }

  ngOnInit() {
    console.log(this.item)
  }
}
