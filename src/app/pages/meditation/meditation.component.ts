import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import music from '../../data/music.json';
import { SharedDataService } from 'src/app/shared/shared-data.service';
import { SharedData } from 'src/app/shared/sharedData';

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.css']

})
export class MeditationComponent implements OnInit {
  public musics = music;
  constructor(private router: Router,
    private sharedDataService: SharedDataService,
    private location: Location) {
  }
  sharedData: SharedData;

  ngOnInit(): void {
  }

  redirectToAudio(url) {

    let newData = new SharedData();
    newData.url = url;

    this.sharedDataService.changeDetail(newData);
    this.router.navigate(['audio']);
  }

  back() {
    this.location.back();

  }
}
