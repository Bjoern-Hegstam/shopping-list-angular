import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AuthStoreModule } from './auth-store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

    AuthStoreModule,
  ],
})
export class RootStoreModule {}
