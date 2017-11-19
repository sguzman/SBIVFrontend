import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Tweet} from '../interface/tweet.interface';
import {TweetService} from '../tweet.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
  providers: [TweetService]
})
export class MapsComponent implements OnInit {
  tweets: Tweet[] = [];
  constructor(public tweet: TweetService) {}

  ngOnInit() {
  }

}
