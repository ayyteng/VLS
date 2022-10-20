import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DisplayCoursesComponent } from './display-courses/display-courses.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { DeleteCoursesComponent } from './delete-courses/delete-courses.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'display-courses', component: DisplayCoursesComponent},
  {path: 'add-courses', component: AddCoursesComponent},
  {path: 'delete-courses', component: DeleteCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }