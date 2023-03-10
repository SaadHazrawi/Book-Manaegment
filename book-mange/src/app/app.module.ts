import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './Book/book.component';

import { BookModule } from './Book/book.module';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AccountComponent } from './login/account.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, AccountComponent],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: WelcomeComponent },
      { path: 'login', component: AccountComponent },
      {
        path: '',
        loadChildren: () =>
          import('./Book/book.module').then((b) => b.BookModule),
      },
      // {path:'books',component:BookComponent},
      //general path's
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
