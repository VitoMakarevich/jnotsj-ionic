import {Component, OnDestroy, OnInit} from '@angular/core';
import {RootState} from '../../reducer';
import {Store} from '@ngrx/store';
import {spinnerStateSelector} from '../../store/selectors/spinner';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {
  private spinner$: Subscription;
  public spinnerValue: boolean;

    constructor(private store: Store<RootState>) { }

  ngOnInit() {
    this.spinner$ = this.store.select(spinnerStateSelector).subscribe((spinnerStatus) => {
      this.spinnerValue = spinnerStatus.shown
    })
  }

  ngOnDestroy() {
    this.spinner$.unsubscribe()
  }
}
