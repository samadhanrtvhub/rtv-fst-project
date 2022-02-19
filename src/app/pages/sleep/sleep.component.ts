import { Component, OnInit } from '@angular/core';
import music from '../../data/music.json';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedDataService } from 'src/app/shared/shared-data.service';
import { SharedData } from 'src/app/shared/sharedData';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.css']
})
export class SleepComponent implements OnInit {

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
