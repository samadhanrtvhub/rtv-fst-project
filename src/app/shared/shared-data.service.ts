import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedData } from './sharedData';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {


  sharedData: SharedData = { url: '' };
  private detailSource = new BehaviorSubject<SharedData>(this.sharedData);
  currentDetail = this.detailSource.asObservable();

  constructor() { }

  changeDetail(sharedData: SharedData) {
    this.detailSource.next(sharedData);
  }
}
