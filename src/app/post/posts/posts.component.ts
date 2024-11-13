import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/Post';

@Component({
  selector: 'app-posts',
  standalone: false,

  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit, OnDestroy {

  postsList: Array<Post>;
  subscriptions: Array<Subscription>

  constructor(private readonly postsService: PostsService) {
    this.postsList = [];
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.postsService.getPosts().subscribe(posts => { this.postsList = posts; console.log(this.postsList); }));

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
