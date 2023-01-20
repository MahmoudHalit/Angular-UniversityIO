import { Component } from '@angular/core';
import { COURSES } from './db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

courses = COURSES;

  data = {
  title : 'Angular core deep dive'
  }

  onShowAlert(input:HTMLInputElement){
   alert(input.value);
  }
  onKeyUp(newTitle:string){
    this.data.title = newTitle;

  }

  onCourseSelected(course:Course){
    console.log("App component - click event bubbled...", course);
  }
}

