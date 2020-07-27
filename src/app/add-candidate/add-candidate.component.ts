import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CandidateInfoService } from '../candidate-info.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {
  gender: Array<any> = [
    {id: 1, value: 'Male', status: true},
    {id: 2, value: 'Female', status: false},
  ];
  keySkills: Array<any> = [
    {id: 1, value: 'Angular JS'},
    {id: 1, value: 'C#'},
    {id: 1, value: 'ASP .Net MVC'},
    {id: 1, value: 'Angular 2+'},
    {id: 1, value: 'React JS'},
    {id: 1, value: 'Vue.js'},
  ];
  addCandidateForm: FormGroup;
  selectedSkillList: Array<any> = [];
  selectedGender: any;
  isSelected: boolean;
  checkValidate: any;


  constructor(
    public dialogRef: MatDialogRef<AddCandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private fb: FormBuilder,
    private candidateInfoService: CandidateInfoService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addCandidateForm = this.fb.group({
      candidateName: [{value: '', disabled: false}, {
        validators: [Validators.required]
      }],
      cityName: [{value: '', disabled: false}, {
        validators: []
      }],
      genderType: [{value: 'Male', disabled: false}, {
        validators: [Validators.required]
      }],
      skills: [{value: '', disabled: false}, {
        validators: [Validators.required]
      }],
    });
  }

  selectedSkill(status, skill) {
    if (status) {
      this.selectedSkillList.push(skill);
    } else {
      this.removeSkills(skill);
    }

    const skillControl = this.addCandidateForm.get('skills');
    if (this.selectedSkillList.length > 0) {
      skillControl.clearValidators();
      skillControl.updateValueAndValidity();
      this.isSelected = false;
    } else {
      skillControl.setValidators([Validators.required]);
      skillControl.updateValueAndValidity();
      this.isSelected = true;
    }
  }

  removeSkills(skill) {
    const index: number = this.selectedSkillList.indexOf(skill);
    if (index !== -1) {
        this.selectedSkillList.splice(index, 1);
    }
  }

  onSubmit(formData) {
    console.log(formData);
    let addCandidateDto = {
      candidateName: formData.candidateName,
      city: formData.cityName,
      status: 'Interview',
      gender: formData.genderType,
      skills: this.selectedSkillList
    };
    console.log(addCandidateDto);
    this.candidateInfoService.addCandidate(addCandidateDto).subscribe(data => {
      this._snackBar.open('Candidate Added Successfully!!', 'Success', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      this.dialogRef.close(true);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
