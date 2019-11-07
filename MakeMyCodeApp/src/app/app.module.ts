import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminMasterComponent } from './_shared/admin.master.component';
import { PostListComponent } from './blog/post.list.component';
import { PostComponent } from './blog/post.component';
import { EditPostComponent } from './blog/edit.post.component';
import { BlogModule } from './blog/blog.module';
import { LoginComponent } from './account/login.component';
import { SignupComponent } from './account/signup.component';
import { FormsModule } from '@angular/forms';
import { AccountModule } from './account/account.module';
import { HttpService } from './_services/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminMasterComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BlogModule,
    AccountModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
