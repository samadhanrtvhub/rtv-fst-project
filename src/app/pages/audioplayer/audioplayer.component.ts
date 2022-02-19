import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/shared/shared-data.service';
import { SharedData } from 'src/app/shared/sharedData';
import { Observable, Subscription } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})
export class AudioplayerComponent implements OnInit, OnDestroy {
  state$: Observable<object>;
  sharedData: SharedData;
  subscription: Subscription;
  //for elucidation only
  url: string;
  constructor(private activatedRoute: ActivatedRoute,
    private sharedDataService: SharedDataService) {
  }

  ngOnInit(): void {
    this.subscription = this.sharedDataService.currentDetail.subscribe(
      (data) => (this.sharedData = data)
    );
    //for elucidation
    this.url = this.sharedData.url;


  }
  triggerOnEnded(event) {
    console.log('ended');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
