import {Component, OnInit} from '@angular/core';
import {Education} from "../models/models";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {

  educationList: Education[]=[
    {
    institute:'Uniglobe SS/College',
      course:'Science',
      duration:'2017-2019',
      score:'65%'
    },
    {
      institute:'Sagarmatha College of Science and Technology',
      course:'Bachelor in Computer Science and Information Technology (BscCSIT)',
      duration:'2019-2024',
      score:'3.4 GPA'
    }
  ];
  constructor() {
  }

ngOnInit() {
}

}
