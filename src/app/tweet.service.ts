import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetService {
  constructor(public http: HttpClient) {
  }

  public tweets$() {
    const url = 'localhost:3000/tweets';
    return this.http.get(url)
      .map(s => s['json']());
  }
}
