import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetService {
  constructor(public http: HttpClient) {
  }

  public tweets$() {
    const url = 'https://tranquil-island-19340.herokuapp.com/';
    return this.http.get(url);
  }
}
