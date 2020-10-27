import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MaterialCategoryApi } from 'src/app/api/material-category.api';
import { MaterialApi } from 'src/app/api/material.api';
import { CategoryWP, MaterialListItemWP, QueryResultBase } from 'src/app/types/models';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
})
export class MaterialViewComponent implements OnInit {

  materialCategories: CategoryWP[]
  materialCategoriesFlat: CategoryWP[]
  materials: MaterialListItemWP[]

  currentCategory: CategoryWP
  currentParentCategory: CategoryWP
  categoryId: number

  bannerUrl: string = './assets/img/bg-resource-all.jpg'

  quantity = 9
  page = 1
  total: number
  loading: boolean

  sort: string = "date"

  constructor(private materialCategoryApi: MaterialCategoryApi, private materialApi: MaterialApi, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.materialCategories = this.route.snapshot.data.cat.categories
    this.materialCategoriesFlat = this.route.snapshot.data.cat.categoriesFlat
    this.route.params.subscribe(data => {
      this.categoryId = data["categoryId"]
      if (this.categoryId) {
        this.currentCategory = this.materialCategoriesFlat.find(c => c.id == this.categoryId)
        this.currentParentCategory = this.materialCategoriesFlat.find(c => c.id == this.currentCategory.parent)
        debugger
        this.getBannerImage()
      }
      this.loading = true
      this.fetch(this.page).subscribe(data => {
        this.loading = false
        this.materials = data.items as MaterialListItemWP[]
        this.total = data.count
      })
    })


  }

  private getBannerImage() {
    switch (+this.categoryId) {
      case 26:
        this.bannerUrl = './assets/img/f-dentist.jpg'
        break;
      case 24:
        this.bannerUrl = './assets/img/f-family.jpg'
        break;
      case 23:
        this.bannerUrl = './assets/img/f-teacher.jpg'
        break;
      case 25:
        this.bannerUrl = './assets/img/f-volunteer.jpg'
        break;
      default:
        this.bannerUrl =  './assets/img/bg-resource-all.jpg'
        break;
    }
  }

  private fetch(page) {
    const skip = (page - 1) * this.quantity
    if (this.categoryId) {
      return this.materialApi.getMaterials({ offset: skip, per_page: this.quantity, material_categories: this.categoryId }, this.sort)
    }
    return this.materialApi.getMaterials({ offset: skip, per_page: this.quantity }, this.sort)
  }

  loadMore() {
    this.loading = true
    this.page += 1
    this.fetch(this.page).subscribe((data => {
      this.loading = false
      this.materials.push(...data.items)
    }))
  }

  onOptionsSelected(value: string) {
    this.sort = value
    this.page = 1
    this.materials = []
    this.loading = true
    this.fetch(this.page).subscribe(data => {
      this.loading = false
      this.materials = data.items as MaterialListItemWP[]
      this.total = data.count
    })
  }

  trackByFn(index, item) {
    return item.id
  }

  getCategoryByAge(item: MaterialListItemWP): CategoryWP {
    return item.categories.find(c => c.parent === 3)
  }

  getCategoryByActivity(item: MaterialListItemWP): CategoryWP {
    return item.categories.find(c => c.parent === 4)
  }

  getCategoryByType(item: MaterialListItemWP): CategoryWP {
    return item.categories.find(c => c.parent === 2)
  }

  getCategoryByTarget(item: MaterialListItemWP): CategoryWP {
    return item.categories.find(c => c.parent === 5)
  }


}
