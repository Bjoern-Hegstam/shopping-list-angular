import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ItemTypesComponent } from './item-types/item-types.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routing } from "./app.routing";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NavigationComponent,
    SiteLayoutComponent,
    ShoppingListComponent,
    ShoppingListsComponent,
    ItemTypesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
