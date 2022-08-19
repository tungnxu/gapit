import { Component, OnInit } from '@angular/core';
import { Survey, SurveyServiceService } from '../survey-service.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {

  data: Survey[]
  constructor(private service: SurveyServiceService) { }

  ngOnInit(): void {
    this.service.userPosts$.subscribe(data => {
      this.data=data
    })
  }

  export(){
    // let csvContent = "data:text/csv;charset=utf-8," 
    // + this.data.map(e => e.join(",")).join("\n");

    const csvString = "data:text/csv;charset=utf-8,%EF%BB%BF" + [
      [
        "Name",
        "Phone",
        "Email",
        "Address",
        "You are",
        "You are Other",
        "Recomendation Method",
        "Recomendation Method Other",
        "Indication Issue",
        "Indication Issue Other",
        "Product Recommend",
      ],
      this.data.map(item => { return [
        "\n"+item.name?.replace(',','.'),
        item.phone?.replace(',','.'),
        item.email?.replace(',','.'),
        item.address?.replace(',','.'),
        item.questYouAre.join("|").replace(',','.'),
        item.questYouAreOther?.replace(',','.'),
        item.questRecomendationMethod.join("|").replace(',','.'),
        item.questRecomendationMethodOther?.replace(',','.'),
        item.questIndicationIssue.join("|").replace(',','.'),
        item.questIndicationIssueOther?.replace(',','.'),
        item.questProductRecommend.join("|").replace(',','.') 
      ] }).map(e => e.join(","))
    ]
     .map(e => e.join(",")) 
     .join("\n");

    let encodedUri = csvString;
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF

    link.click();
  }

}
