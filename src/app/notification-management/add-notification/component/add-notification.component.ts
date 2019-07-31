import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Localization} from '../../../static/localization';

@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss'],
})
export class AddNotificationComponent implements OnInit {
  public createNotificationForm: FormGroup

  @Output()
  private createNotification: EventEmitter = new EventEmitter()

  constructor(private fb: FormBuilder, public localization: Localization) {
      this.createNotificationForm = this.fb.group({
          startDate: ['', Validators.required],
          endDate: ['', Validators.required],
          text: ['', Validators.required],
      })
  }

  handleSubmit() {
    this.createNotification.emit(this.createNotificationForm.value)
  }

  ngOnInit() {}

}
