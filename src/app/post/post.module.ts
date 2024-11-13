import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { PostRoutingModule } from './post-routing/post-routing.module';




@NgModule({
  declarations: [PostsComponent, PostDetailComponent, AuthorDetailComponent],
  imports: [
    CommonModule, PostRoutingModule
  ]
})
export class PostModule { }
