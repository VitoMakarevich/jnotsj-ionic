import {Component, OnInit} from '@angular/core';
import {RootState} from '../../reducer';
import {Store} from '@ngrx/store';
import {headerStateSelector} from '../../store/selectors/header';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HeaderState} from '../../store/reducers/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public headerText: Observable<string>
  constructor(private store: Store<RootState>) { }

    ngOnInit() {
        this.headerText = this.store.select(headerStateSelector).pipe(
            map((headerState: HeaderState) => headerState.text)
        )
    }
}
