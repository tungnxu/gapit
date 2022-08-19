import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { SurveyComponent } from './survey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SurveyServiceService } from './survey-service.service';
import { ExportComponent } from './export/export.component';

const firebaseConfig = {
  apiKey: "AIzaSyDLuMeElafcjGQY8Y4hy5mcsu31jpoSH8s",
  authDomain: "tempo-survey.firebaseapp.com",
  projectId: "tempo-survey",
  storageBucket: "tempo-survey.appspot.com",
  messagingSenderId: "916713357969",
  appId: "1:916713357969:web:3a69724d036c96cac57530",
  measurementId: "G-5VTQ0QX1WY"
};

@NgModule({
  declarations: [SurveyComponent, ExportComponent],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [
    SurveyServiceService
  ]
})
export class SurveyModule { }
