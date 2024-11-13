import { inject, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { AuthorDetailComponent } from '../author-detail/author-detail.component';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { PostsComponent } from '../posts/posts.component';
import { PostsService } from '../../posts.service';


const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [
      {
        path: ':id',
        children: [
          {
            path: '',
            outlet: "author", component: AuthorDetailComponent
          },
          {
            path: '', component: PostDetailComponent
          },
        ],
        resolve: {
          post: (ars: ActivatedRouteSnapshot) => inject(PostsService).getPost(ars.params['id'])
        }

      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }