import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayCoursesComponent } from './display-courses/display-courses.component';
import { LoginComponent } from './login/login.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { DeleteCoursesComponent } from './delete-courses/delete-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCoursesComponent,
    LoginComponent,
    AddCoursesComponent,
    DeleteCoursesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
