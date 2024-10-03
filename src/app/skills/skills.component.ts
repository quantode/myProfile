import { Component } from '@angular/core';
import {Skill} from "../models/models";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
skills: Skill[]=[
  {
    name:'Angular',
    level:'Beginner',
    rating:30
  },
  {
    name:'JAVA',
    level:'Beginner',
    rating:20
  },
  {
    name:'Typescript',
    level:'Beginner',
    rating:20
  }
];
}
