import { Component, OnInit } from '@angular/core';
import video from '../../data/video.json';
import { Location } from '@angular/common';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.css']
})
export class YogaComponent implements OnInit {
  public videos = video;
  constructor(private location: Location) {

  }

  ngOnInit(): void {
  }
  back() {
    this.location.back();

  }
}
