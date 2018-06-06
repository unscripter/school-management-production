import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentModule } from './students/student.module';
import { ParentsModule } from './parents/parents.module';

@NgModule({
  declarations: [
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    StudentModule,
    ParentsModule
  ],
  exports: [
],
    providers: [],
})
export class DashBoardModule { }
