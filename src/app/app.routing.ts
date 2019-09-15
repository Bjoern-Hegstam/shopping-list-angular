import { RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ItemTypesComponent } from './item-types/item-types.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'lists', component: ShoppingListsComponent },
      { path: 'lists/:listId', component: ShoppingListComponent },
      { path: 'item-types', component: ItemTypesComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);
