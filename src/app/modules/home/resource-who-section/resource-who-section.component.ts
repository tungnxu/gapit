import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { MaterialCategoryApi } from 'src/app/api/material-category.api';
import { MaterialApi } from 'src/app/api/material.api';
import { CategoryWP, MaterialListItemWP, ResourceListItem } from 'src/app/types/models';

@Component({
  selector: 'app-resource-who-section',
  templateUrl: './resource-who-section.component.html',
  styleUrls: ['./resource-who-section.component.scss']
})
export class ResourceWhoSectionComponent implements OnInit {
  public slickModal: SlickCarouselComponent;
  currentResourceList: MaterialListItemWP[] = []

  whoCategoryList: CategoryWP[]
  currentCat: CategoryWP

  slideConfig = {
    'dots': false,
    'infinite': false,
    'variableWidth': true
  };
  constructor(private materialApi: MaterialApi, private categoryMaterial: MaterialCategoryApi) { }

  ngOnInit(): void {
    this.categoryMaterial.queryCategories({ parent: 5 }).subscribe(cats => {
      this.whoCategoryList = cats.items as CategoryWP[]
      this.getBest()
    })
  }

  removeSlide() {
    this.currentResourceList.length = 0;
  }

  getBest(){
    this.currentCat = null
    this.materialApi.getMaterials({ offset: 0, per_page: 8},'likeCount')
    .subscribe(data => {
      this.currentResourceList = (data.items as MaterialListItemWP[])
    })
  }

  getCategoryByType(item): CategoryWP {
    return item.categories.find(c => c.parent === 2)
  }

  getCategory(cat) {
    this.currentCat = cat
    if (this.slickModal) {
      this.slickModal.unslick()

    }
    this.currentResourceList = []
    this.materialApi.getMaterials({ offset: 0, per_page: 8, material_categories: this.currentCat.id })
      .subscribe(data => {
        this.currentResourceList = (data.items as MaterialListItemWP[])
      })
  }

  slickInit(e) {
    this.slickModal = e.slick
  }


}
