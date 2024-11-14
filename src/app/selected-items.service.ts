import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Post } from './post/models/Post';

@Injectable({
  providedIn: 'root'
})
export class SelectedItemsService {

  private _postsSelected: WritableSignal<Set<Post>> = signal(new Set());
  
  get postsSelected(): Signal<Set<Post>> {
    return this._postsSelected.asReadonly();
  }

  constructor() { }

  public addPost(post: Post) {
    this._postsSelected.update(s => new Set([...s]).add(post));
  }
}
