import { NgModule } from '@angular/core';
import { ItemTypesComponent } from './components/item-types/item-types.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth/auth.guard';

const routes = [{ path: '', canActivate: [AuthGuard], component: ItemTypesComponent }];

@NgModule({
  declarations: [
    ItemTypesComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemTypesModule {
}
