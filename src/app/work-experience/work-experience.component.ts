import { Component } from '@angular/core';
import {WorkExperience} from "../models/models";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
workExpList: WorkExperience[]=[
  {
    role:'Developer Intern',
    company:'YCO Solutions Pvt. Ltd.',
    duration:'May 2023 - Jul 2024',
    description:[
'Developed PDFs for a central KYC project using the Angular framework, with implementation logic written in Typescript.'	,
      'Structured the PDF layout using vanilla HTML and CSS, ensuring seamless integration with the dynamic data through Typescript.'
    ],
  }


];
}
