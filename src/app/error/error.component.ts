import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit{
  errorMessage: string=" error occured";
  constructor() { }
ngOnInit() {
}

handleError(error: Error) {
    this.errorMessage = error.message;
}
}
