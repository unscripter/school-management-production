import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebsiteHeader } from './website.directives/header.directive/header.directive';
import { WebsiteTestimonial } from './website.directives/testimonial.directive/tetimonial.directive';
import { WebsiteFooter } from './website.directives/footer.directive/footer.directive';
import { WebsiteGallery } from './website.directives/gallery.directive/gallery.directive';
import { WebsitePrograms } from './website.directives/programs.directive/programs.directive';
import { WebsiteProgress } from './website.directives/progress.directive/progress.directive';
import { WebsiteTeachers } from './website.directives/teachers.directive/teachers.directive';
// import { Website } from './website';


@NgModule({
  declarations: [
    WebsiteHeader,
    WebsiteTestimonial,
    WebsiteFooter,
    WebsiteGallery,
    WebsitePrograms,
    WebsiteProgress,
    WebsiteTeachers,
    // Website
  ],
  entryComponents: [
    WebsiteHeader,
    WebsiteTestimonial,
    WebsiteFooter,
    WebsiteGallery,
    WebsitePrograms,
    WebsiteProgress,
    WebsiteTeachers,
    // Website
  ],
  imports: [
    BrowserModule
  ],
  exports: [ WebsiteHeader,
    WebsiteTestimonial,
    WebsiteFooter,
    WebsiteGallery,
    WebsitePrograms,
    WebsiteProgress,
    WebsiteTeachers,
    // Website
],
    providers: [],
})
export class WebsiteModule { }
