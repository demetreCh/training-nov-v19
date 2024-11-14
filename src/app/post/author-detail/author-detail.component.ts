import { Component, inject, Input, input } from '@angular/core';
import { AuthorService } from '../../author.service';
import { Post } from '../models/Post';
import { Author } from '../models/Author';

@Component({
    selector: 'app-author-detail',
    templateUrl: './author-detail.component.html',
    styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent {
    @Input() post?: Post;
    author: Author | undefined;

    constructor() {
        inject(AuthorService).getAuthor(this.post?.author).subscribe(res => this.author = res);
    }
}
