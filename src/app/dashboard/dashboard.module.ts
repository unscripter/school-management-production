import { NgModule } from '@angular/core';
import { StudentModule } from './students/student.module';
import { ParentsModule } from './parents/parents.module';
import { routing } from './dashboard.routing';
import { Dashboard } from './dashboard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		Dashboard
	],
	entryComponents: [
	],
	imports: [
		StudentModule,
		ParentsModule,
		routing,
		CommonModule,
		FormsModule
	],
	exports: [
	],
	providers: [],
})
export class DashBoardModule { }
