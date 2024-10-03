import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][]=[
    ['Name', 'Shreeya Khanal'],
    ['DOB', '200/10/11'],
    ['Work Experience', 'Internship'],
    ['Education', 'BscCSIT (2024)'],
  ];

  aboutMe: string[]=[
    'Hi, I am a Software Developer searching for Entry level job in software industry.',
    'I worked as an developer intern in YCO Solutions Pvt. Ltd.',
    'Developed PDFs for a central KYC project using the Angular framework, with implementation logic written in Typescript.Structured the PDF layout using vanilla HTML and CSS,ensuring seamless integration with the dynamic data through Typescript.',
    'Always eager to learn new technologies.'
  ];

  constructor() {
  }
  ngOnInit() {
  }

}
