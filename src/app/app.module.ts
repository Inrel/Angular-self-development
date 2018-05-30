import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from "./app-routing.module";
import { PreviewComponent } from './preview/preview.component';
import {PersonalInformationService} from "./personal-information.service";


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PreviewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [PersonalInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
