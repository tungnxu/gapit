import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialApi } from 'src/app/api/material.api';
import { CategoryWP, MaterialListItemWP, MaterialWP } from 'src/app/types/models';

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
})
export class MaterialDetailComponent implements OnInit {
  moreMaterial: MaterialListItemWP[]

  material: MaterialWP
  materialType: string
  constructor(private route: ActivatedRoute, private materialApi: MaterialApi) { }



  ngOnInit(): void {
    // this.material = this.route.snapshot.data.material
    this.route.data.subscribe(data => {
    this.materialType = this.route.snapshot.params.type  
      this.material = data.material
      this.materialApi.getMaterials({ offset: 0, per_page: 5, material_categories:  this.getCategoryByType(this.material).id }, '-likeCount')
      .subscribe(data =>{
        this.moreMaterial = (data.items as MaterialListItemWP[]).slice()
        const index = this.moreMaterial.findIndex(x => x.id === this.material.id)
        if (index > -1) {
          this.moreMaterial.splice(index, 1);
        }
      })
    })
   

  }

  getCategoryByAge(item): CategoryWP {
    return item.categories.find(c => c.parent === 3)
  }

  getCategoryByActivity(item): CategoryWP {
    return item.categories.find(c => c.parent === 4)
  }

  getCategoryByType(item): CategoryWP {
    return item.categories.find(c => c.parent === 2)
  }

}
