import { Component } from '@angular/core';
import { COURSES } from './db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];

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

