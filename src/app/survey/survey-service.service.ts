import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';


export interface Survey{
  name: string;
  phone: string;
  email: string;
  address: string;
  questYouAre: string[];
  questYouAreOther?: string;
  questRecomendationMethod: string[];
  questRecomendationMethodOther?: string;
  questIndicationIssue: string[];
  questIndicationIssueOther?:string;
  questProductRecommend: string[];
}

@Injectable()
export class SurveyServiceService {

  private surveyCollection: AngularFirestoreCollection<Survey>;
  userPosts$: Observable<Survey[]>;

  constructor(private firestore: AngularFirestore) {
    this.surveyCollection = this.firestore.collection<Survey>('survey');
    this.userPosts$ = this.surveyCollection.valueChanges();
  }

  addSurvey(survey: Survey): Observable<DocumentReference> {
    return from(this.surveyCollection.add(survey));
  }
}
