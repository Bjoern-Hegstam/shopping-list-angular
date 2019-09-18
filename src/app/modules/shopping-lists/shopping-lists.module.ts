import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingListsComponent } from './components/shopping-lists/shopping-lists.component';
import { AuthGuard } from '../../guards/auth/auth.guard';

const routes = [{
  path: '',
  canActivate: [AuthGuard],
  component: ShoppingListsComponent,
}];

@NgModule({
  declarations: [
    ShoppingListsComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingListsModule {
}
