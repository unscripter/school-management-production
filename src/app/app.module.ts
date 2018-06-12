import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebsiteModule } from './website/website.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing.module';
import { PageNotFoundComponent } from './app.component.notfound';
import { Website } from './website/website';
import { DashBoardModule } from './dashboard/dashboard.module';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    Website,
    Dashboard,
    Login
  ],
  imports: [
    BrowserModule,
    WebsiteModule,
    DashBoardModule,
    LoginModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
