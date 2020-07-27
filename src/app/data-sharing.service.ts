import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }

  /*================Total Candidate Count================*/
  private totalCandidateCount = new BehaviorSubject<any>(0);
  totalCount = this.totalCandidateCount.asObservable();

  changeTotalCount(count: any) {
    this.totalCandidateCount.next(count);
  }

  /*================Selected Candidate Count================*/
  private selectedCandidateCount = new BehaviorSubject<any>(0);
  selectedCount = this.selectedCandidateCount.asObservable();

  changeSelectedCount(count: any) {
    this.selectedCandidateCount.next(count);
  }

  /*================Rejected Candidate Count================*/
  private rejectedCandidateCount = new BehaviorSubject<any>(0);
  rejectedCount = this.rejectedCandidateCount.asObservable();

  changeRejectedCount(count: any) {
    this.rejectedCandidateCount.next(count);
  }

}
