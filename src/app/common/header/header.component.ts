import { Component, OnInit } from '@angular/core'
import { RootState } from '../../reducer'
import { Store } from '@ngrx/store'
import { headerStateSelector } from '../../store/selectors/header'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { HeaderState } from '../../store/reducers/header'
import { StorageService } from '../../storage/storage.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public headerText: Observable<string>
  constructor(private store: Store<RootState>, private storage: StorageService, private router: Router) {}

  ngOnInit() {
    this.headerText = this.store.select(headerStateSelector).pipe(map((headerState: HeaderState) => headerState.text))
  }

  async handleSignOut() {
    await this.storage.resetUser()
    return this.router.navigate(['auth/sign-in'])
  }

  async isUserAuthenticated() {
    const userDetails = await this.storage.getUser()
    console.log(userDetails)
    return !!userDetails
  }
}
