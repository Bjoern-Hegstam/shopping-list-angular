import { PreloadAllModules, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoute } from './constants/app-routes';
import { environment } from '../environments/environment';

const routes = [
  {
    path: AppRoute.LOGIN,
    loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: AppRoute.LISTS,
    loadChildren: () => import('./modules/shopping-list/shopping-list.module').then(mod => mod.ShoppingListModule)
  },
  {
    path: AppRoute.LIST,
    loadChildren: () => import('./modules/shopping-lists/shopping-lists.module').then(mod => mod.ShoppingListsModule)
  },
  {
    path: AppRoute.ITEM_TYPES,
    loadChildren: () => import('./modules/item-types/item-types.module').then(mod => mod.ItemTypesModule)
  },
  { path: '**', redirectTo: AppRoute.LOGIN },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false, // For debugging,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
