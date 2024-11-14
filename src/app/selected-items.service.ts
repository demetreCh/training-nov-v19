import { Injectable, signal, WritableSignal } from '@angular/core';
import { Post } from './post/models/Post';

@Injectable({
  providedIn: 'root'
})
export class SelectedItemsService {

  private postsSelected: WritableSignal<Set<Post>> = signal(new Set());

  constructor() { }

  public addPost(post: Post){
    this.postsSelected.update(s=> s.add(post) )
    console.log(this.postsSelected());
  }
}
