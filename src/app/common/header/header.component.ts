import {Component, OnDestroy, OnInit} from '@angular/core';
import {RootState} from '../../reducer';
import {Store} from '@ngrx/store';
import {headerStateSelector} from '../../store/selectors/header';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private headerText: string
  private header$: Subscription
  constructor(private store: Store<RootState>) { }

    ngOnInit() {
        this.header$ = this.store.select(headerStateSelector).subscribe(
            (headerState) => {
              this.headerText = headerState.text
            }
        )
    }

    ngOnDestroy() {
        this.header$.unsubscribe()
    }
}
