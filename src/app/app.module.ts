import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLibComponent } from 'my-lib';
import { DashboardComponent } from './post/dashboard/dashboard.component';
import { PostsComponent } from './post/posts/posts.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { AuthorDetailComponent } from './post/author-detail/author-detail.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MyLibComponent,
    AppRoutingModule
  ],
  providers: [ provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
