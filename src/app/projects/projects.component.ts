import { Component } from '@angular/core';
import {Project} from "../models/models";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projects:Project[]=[
  {
    title:'Content based movie recommendation system',
    technologies:'Jupyter notebook, Python, Flask, MySQL database',
    description:[
      'Performed data preprocessing of dummy data form TMDB database, using datasets.',
      'Built a model to find similarity using cosine similarity algorithm.',
      'Added feature for user registration and admin and user login functionality using SQLite database',
      'Implemented feedback page to collect user feedback and save it on MySQL database.',
      'Implemented beautiful front end containing overlay to display contents, by using JavaScript by fetching TMDB API.'
    ]
  },
  {
    title:'Employee Management Application',
    technologies:'Angular, Spring Boot, MySQL Workbench, Hibernate, Postman',
    description:[
      'Developed a full-stack CRUD application using Angular for the frontend and Spring Boot for the backend.',
      'Integrated MySQL Workbench as the data source and used Hibernate for Object-Relational Mapping (ORM).',
      'Conducted thorough API testing using Postman to ensure reliable backend operations.',
      'Implemented feedback page to collect user feedback and save it on MySQL database.',
      'Enhanced the user interface by integrating Bootstrap, providing a responsive and user-friendly design.'
    ]
  }
]
}
