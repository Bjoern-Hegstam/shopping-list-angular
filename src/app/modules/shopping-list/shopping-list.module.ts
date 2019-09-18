import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth/auth.guard';

const routes = [{
  path: '',
  canActivate: [AuthGuard],
  component: ShoppingListComponent,
}];

@NgModule({
  declarations: [
    ShoppingListComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingListModule {
}
