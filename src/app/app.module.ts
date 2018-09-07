import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard';
import { SearchComponent } from './search/search.component';
import { SearchResolver } from './search-resolver';
import { HttpModule } from '@angular/http';
import { EditComponent } from './edit/edit.component';
import { EditResolver } from './edit-resolver';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard],
    resolve: {
        list: SearchResolver,
    },
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthGuard],
    resolve: {
        order: EditResolver,
    },
  },
  { path: "**", component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    EditComponent
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes, {enableTracing: true}  // <-- debugging purposes only
        ),
    BrowserModule,
    HttpModule
  ],
  providers: [AuthService, AuthGuard, SearchResolver, EditResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
