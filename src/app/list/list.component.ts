import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TweetService} from '../tweet.service';
import {MatSnackBar} from '@angular/material';
import {TweetRaw} from '../interface/tweet-raw.interface';
import {Tweet} from '../interface/tweet.interface';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [TweetService]
})
export class ListComponent implements OnInit {
  tweets: Tweet[] = [];

  up$ = new Subject();
  constructor(public tweet: TweetService) {
    this.up$.flatMap(() => this.tweet.tweets$())
      .map(s => s['tweets'])
      .flatMap(s => s)
      .subscribe(
        (s: TweetRaw) => {
          try {
            const text: string = s['text'];
            const text2: string = text.substring(0, text.lastIndexOf(' *'));
            const loc = text2.substring(text2.lastIndexOf('*3') + 1);

            const pair = loc.split(' ');
            const lat = pair[0].substr(0, 2) + '.' + pair[0].substring(2);
            const lng = pair[1].substr(0, 4) + '.' + pair[1].substring(4);

            const latNum = parseFloat(lat);
            const lngNum = parseFloat(lng);

            const aTweet: Tweet = {
              created_at: s.created_at,
              id: s.id,
              text: s.text,
              lat: latNum,
              lng: lngNum
            };

            console.log(aTweet);
            this.tweets.push(aTweet);
          } catch (e) {
            console.error(e);
          }
        },
        error => console.error(`:( ${error}`),
        () => console.log('Finished')
      );
  }

  ngOnInit() {
    this.up$.next();
  }

}
