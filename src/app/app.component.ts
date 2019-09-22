import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthStoreSelectors, RootStoreState } from './root-store';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  userAuthenticated: boolean;
  subscriptions$: Subscription[];

  constructor(private store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.subscriptions$ = [
      this
        .store$
        .pipe(
          select(AuthStoreSelectors.selectIsAuthenticated),
          tap(state => this.userAuthenticated = state.isAuthenticated)
        )
        .subscribe(),
    ];
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(sub => sub.unsubscribe());
  }
}
