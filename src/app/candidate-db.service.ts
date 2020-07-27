import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class CandidateDBService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let candidateInfoDB = [
      {id: 1, candidateName: 'Rahul Patil', city: 'Pune', gender: 'Male', status: 'Interview', skills: [
        {id: 1, value: 'C#'},
        {id: 1, value: 'Angular 2+'}
      ]},
      {id: 2, candidateName: 'Amruta Rane', city: 'Jalgaon', gender: 'Female', status: 'Interview', skills: [
        {id: 1, value: 'Java'},
        {id: 1, value: 'SQL'}
      ]},
      {id: 3, candidateName: 'Ketan Jawale', city: 'Mumbai', gender: 'Male', status: 'Interview', skills: [
        {id: 1, value: '.Net'},
        {id: 1, value: 'Node JS'}
      ]},
      {id: 4, candidateName: 'Avani Gupta', city: 'Nashik', gender: 'Female', status: 'Interview', skills: [
        {id: 1, value: 'MongoDB'},
        {id: 1, value: 'React JS'}
      ]},
    ];
    return {candidateDetails: candidateInfoDB};
  }

}
