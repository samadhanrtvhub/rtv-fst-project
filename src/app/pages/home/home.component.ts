import { Component, OnInit } from '@angular/core';
//import video from '../../data/video.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public images: any;
  // public title: any;
  // public url: any;
  constructor() { }
  // public video = video;
  ngOnInit(): void {
    // this.title = video[0]['Title'][0]
    // this.url = video[0]['HLSPath'][0]
    // console.log("music=================>" + JSON.stringify(video[0]));
    // this.images = video[0]['ImagePath'][0];
    // console.log(" this.images=================>" + this.images);
  }

}
