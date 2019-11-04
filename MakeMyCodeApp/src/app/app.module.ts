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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
