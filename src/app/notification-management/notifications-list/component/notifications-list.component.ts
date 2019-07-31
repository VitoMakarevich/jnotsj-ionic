import {Component, Input, OnInit} from '@angular/core';
import {NotificationData} from '../../store/types/notificationsList';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notifications-list-component',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.scss'],
})
export class NotificationsListComponent {

  @Input()
  list: NotificationData[]

  constructor() { }
}
