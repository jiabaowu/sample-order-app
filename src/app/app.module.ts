import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard';
import { SearchComponent } from './search/search.component';
import { SearchResolver } from './search-resolver';
import { HttpModule } from '@angular/http';
import { EditComponent } from './edit/edit.component';
import { EditResolver } from './edit-resolver';
import { AmountPipe } from './amount.pipe';
import { AddressPipe } from './address.pipe';

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
        user: EditResolver,
    },
  },
  { path: "**", component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    EditComponent,
    AmountPipe,
    AddressPipe
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes, {enableTracing: true}  // <-- debugging purposes only
        ),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, SearchResolver, EditResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
