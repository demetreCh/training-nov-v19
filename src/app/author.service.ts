import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Author } from './post/models/Author';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  httpClient = inject(HttpClient);

  public getAuthor(authorId: number | undefined): Observable<Author | undefined> {
    if (authorId) {
      return this.httpClient.get<Author>(`/api/authors/${authorId}`);
    } else {
      return of(undefined);
    }
  }
}
