import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private readonly httpClient: HttpClient) { }

  getPosts() : Observable<Array<Post>>{
    return this.httpClient.get<Array<Post>>('/api/posts');
  }

  getPost(id: number) : Observable<Post>{
    console.log(`Récupération de l'id: ${id}`)
    return this.httpClient.get<Post>(`/api/posts/${id}`);
  }
}
