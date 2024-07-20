import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';



@NgModule({
  declarations: [
    CoursesComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DrashboardModule { }
