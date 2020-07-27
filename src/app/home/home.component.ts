import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCandidateComponent } from '../add-candidate/add-candidate.component';
import { CandidateInfoService } from '../candidate-info.service';
import { DataSharingService } from '../data-sharing.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  candidateData: Array<any> = [];
  searchText: any;

  constructor(
    public dialog: MatDialog,
    private candidateInfoService: CandidateInfoService,
    private dataSharingService: DataSharingService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getCandidateData();
    this.dataSharingService.changeSelectedCount(0);
    this.dataSharingService.changeRejectedCount(0);
  }

  getCandidateData() {
    this.candidateInfoService.getCandidateData().subscribe(data => {
      console.log(data);
      this.candidateData = data;
      let totalCandidateCount = this.candidateData.length;
      this.dataSharingService.changeTotalCount(totalCandidateCount);
    });
  }

  applyFilter(event: Event) {
    let dataSource
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addCandidate() {
    const dialogRef = this.dialog.open(AddCandidateComponent, {
      width: '600px',
      //height: '400px',
      data: '',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getCandidateData();
        let totalCandidateCount = this.candidateData.length;
        this.dataSharingService.changeTotalCount(totalCandidateCount);
      }
    });
  }

  selectedCandidate(value) {
    value.status = 'Selected';
    let selectedCandidate = [];
    this.candidateData.forEach(element => {
      if (element['status'] === 'Selected') {
        selectedCandidate.push(element);
      }
    });
    let selectedCount = selectedCandidate.length;
    this.dataSharingService.changeSelectedCount(selectedCount);
    this._snackBar.open('Candidate Selected Successfully!!', 'Success', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  rejectedCandidate(value) {
    value.status = 'Rejected';
    let rejectedCandidate = [];
    this.candidateData.forEach(element => {
      if (element['status'] === 'Rejected') {
        rejectedCandidate.push(element);
      }
    });
    let rejectedCount = rejectedCandidate.length;
    this.dataSharingService.changeRejectedCount(rejectedCount);
    this._snackBar.open('Candidate Rejected Successfully!!', 'Success', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

}
