import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';


@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DiseasesComponent implements OnInit {

  // slides = [
  //   { 'image': 'https://picsum.photos/seed/picsum/1200/300' },
  //   { 'image': 'https://picsum.photos/seed/picsum/1200/300' },
  //   { 'image': 'https://picsum.photos/seed/picsum/1200/300' },
  //   { 'image': 'https://picsum.photos/seed/picsum/1200/300' },
  //   { 'image': 'https://picsum.photos/seed/picsum/1200/300' }
  // ];

  slides = [1, 2, 3, 4, 54, 6, 7, 8];

  slideConfig = {
    "slidesToShow": 1.3,
    "slidesToScroll": 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1400,
    "dots": false,
    "infinite": false
  };

  addSlide() {
    this.slides.push(488)
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor() { }

  ngOnInit(): void {


  }

}
