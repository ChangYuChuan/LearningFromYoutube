import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnChanges {

  constructor() { }
  @Input() videoId:string = '';
  @Input() timeStamp:number = 0;
  // InputVideoId:string = '';
  // InputTimeStamp:number = 0;
  apiLoaded:boolean = false;
  ngOnInit(): void {
    if(!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.videoId == '')
      return;
    // this.InputVideoId = this.videoId;
    // this.InputTimeStamp = this.timeStamp;
    console.log('videoId',this.videoId);
    console.log('timeStamp',this.timeStamp);
  }

}
