import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryWP, MaterialWP } from 'src/app/types/models';

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.scss']
})
export class MaterialDetailComponent implements OnInit {

  material: MaterialWP
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      debugger
      this.material = data.material
    })
  }

  getCategoryByAge(item): CategoryWP {
    return item.categories.find(c => c.parent === 4)
  }

  getCategoryByActivity(item): CategoryWP {
    return item.categories.find(c => c.parent === 10)
  }

}
