import { NgModule } from '@angular/core';
import { WebsiteModule } from './website/website.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing.module';
import { PageNotFoundComponent } from './app.component.notfound';
import { Website } from './website/website';
import { Login } from './login/login';
// import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    Website,
    Login
  ],
  imports: [
    BrowserModule,
    WebsiteModule,
    routing,
    // CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
