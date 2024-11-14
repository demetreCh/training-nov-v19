import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/Post';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { SelectedItemsService } from '../../selected-items.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
  imports: [RouterOutlet, RouterLink, AsyncPipe]
})
export class PostsComponent {
  constructor(private readonly selectedItemsService: SelectedItemsService) {

  }
  selectPost(post: Post) {
    this.selectedItemsService.addPost(post);
  }

  postsList = inject(PostsService).getPosts();

}
