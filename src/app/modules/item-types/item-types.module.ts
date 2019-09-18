import { NgModule } from '@angular/core';
import { ItemTypesComponent } from './components/item-types/item-types.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: ItemTypesComponent}];

@NgModule({
  declarations: [
    ItemTypesComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemTypesModule {
}
