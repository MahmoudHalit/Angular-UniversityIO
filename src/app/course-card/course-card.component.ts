import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input() course!: Course;
  @Input() cardIndex : number= 0;
  @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

  ngOnInit(): void {}

  OnCourseViewed() {
    this.courseEmitter.emit(this.course);
  }
}

function Ouput() {
  throw new Error('Function not implemented.');
}
