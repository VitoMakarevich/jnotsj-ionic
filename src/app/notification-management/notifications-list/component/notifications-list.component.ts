import {Component, Input, OnInit} from '@angular/core';
import {NotificationData} from '../../store/types/notificationsList';

@Component({
  selector: 'app-notifications-list-component',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss'],
})
export class NotificationsListComponent implements OnInit {

  @Input()
  list: NotificationData[]

  constructor() { }

  ngOnInit() {}

}
