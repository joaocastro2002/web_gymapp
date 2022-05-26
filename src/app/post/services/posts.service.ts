import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { CommentPost } from 'src/app/models/comment-post.model';
import { PostInfo } from 'src/app/models/post-info.model';
import { Post } from 'src/app/models/post.model';

const api_url = "http://localhost:2900/"

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,
    private token: TokenStorageService
  ) { }

  getAllPosts(): Observable<Post> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })
    return this.http.get<Post>(`${api_url}posts`, { headers: headers })
  }

  getInfoOfPost(postId: string): Observable<PostInfo> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })
    return this.http.get<PostInfo>(`${api_url}posts/${postId}`, { headers: headers })
  }

  comentPost(comment: CommentPost): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })
    return this.http.post(`${api_url}posts/comentarios`, comment, { headers: headers })
  }

  likePost(like: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token.getToken()
    })
    return this.http.post(`${api_url}posts/gostos`, like, { headers: headers })
  }
}
