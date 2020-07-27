import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalCount: any;
  selectedCount: any;
  rejectedCount: any;

  constructor(
    private dataSharingService: DataSharingService,
  ) { }

  ngOnInit(): void {
    /*================Total Candidate Count===================*/
    this.dataSharingService.totalCount.subscribe(totalCount => {
      this.totalCount = totalCount;
    });

    /*================Selected Candidate Count===================*/
    this.dataSharingService.selectedCount.subscribe(selectedCount => {
      this.selectedCount = selectedCount;
    });

    /*================Rejected Candidate Count===================*/
    this.dataSharingService.rejectedCount.subscribe(rejectedCount => {
      this.rejectedCount = rejectedCount;
    });
    
  }

}
