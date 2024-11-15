import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../models/Post';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { SelectedItemsService } from '../../selected-items.service';
import { LoggerLevel, LoggerService, provideLogger } from '../../logger.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
  imports: [RouterOutlet, RouterLink, AsyncPipe],
  providers: [
    provideLogger(LoggerLevel.DEBUG)
  ]
})
export class PostsComponent {
  readonly PREFIX = 'PostsComponent -';
  loggerService = inject(LoggerService);


  constructor(private readonly selectedItemsService: SelectedItemsService) {

  }
  selectPost(post: Post) {
    this.selectedItemsService.addPost(post);
    this.loggerService.log(LoggerLevel.DEBUG, `${this.PREFIX} Hello DEBUG`);
    this.loggerService.log(LoggerLevel.INFO, `${this.PREFIX} Hello INFO`);
    this.loggerService.log(LoggerLevel.ERROR, `${this.PREFIX} Hello ERROR`);
  }

  postsList = inject(PostsService).getPosts();

}
