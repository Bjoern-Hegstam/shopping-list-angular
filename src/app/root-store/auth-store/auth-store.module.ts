import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthStoreEffects } from './effects';
import { stateKey } from './state';

@NgModule({
  imports: [
    StoreModule.forFeature(stateKey, reducer),
    EffectsModule.forFeature([AuthStoreEffects])
  ],
  providers: [AuthStoreEffects],
})
export class AuthStoreModule {
}
