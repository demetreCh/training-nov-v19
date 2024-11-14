import { Component, input, Input } from '@angular/core';
import { PostsService } from '../../posts.service';
import { Post } from '../models/Post';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {

  @Input() post?: Post;
  
  constructor(){
  }



}
