import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/Post';

@Component({
  selector: 'app-posts',
  standalone: false,

  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  postsList = inject(PostsService).getPosts();

}
