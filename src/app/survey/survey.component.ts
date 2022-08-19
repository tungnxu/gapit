import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { INDICATION_ISSUE, PRODUCT_RECOMMEND, RECOMMENDATION_METHOD, YOU_ARE } from './question-data';
import { SurveyServiceService } from './survey-service.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  questYouAreOther: string = 'test-fire';
  form: FormGroup
  submitted = false;
  isConfirm = false
  loading = false

  YOU_ARE = YOU_ARE
  RECOMMENDATION_METHOD = RECOMMENDATION_METHOD
  INDICATION_ISSUE = INDICATION_ISSUE
  PRODUCT_RECOMMEND = PRODUCT_RECOMMEND
  get f() { return this.form.controls; }

  constructor(private formBuilder: FormBuilder, private surveyService : SurveyServiceService) {
   }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [ Validators.email]],
      address: ['', Validators.required],
      questYouAre: this.formBuilder.array([], [Validators.required]),
      questYouAreOther: [''],
      questRecomendationMethod: this.formBuilder.array([], [Validators.required]),
      questRecomendationMethodOther: [''],
      questIndicationIssue: this.formBuilder.array([], [Validators.required]),
      questIndicationIssueOther: [''],
      questProductRecommend: this.formBuilder.array([], [Validators.required]),

    });
  }

  onCheckboxChange(e: any, questionControl: FormArray, other: string) {
    if (e.target.checked) {
      questionControl.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      questionControl.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          questionControl.removeAt(i);
          return;
        }
        i++;
      });
    }
  }


  onSubmit(){
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.loading = true
    const res = () => {
      this.onReset()
      location.replace('https://zalo.me/1316771228199846434')

    }

    const err = (e) => {
      this.loading = false
      console.log(e);
    }

    this.surveyService.addSurvey(this.form.value).subscribe(res, err)
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }
}
