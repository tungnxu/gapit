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
  materials: QueryResultBase<MaterialListItemWP>

  categoryId: number

  constructor(private materialCategoryApi: MaterialCategoryApi, private materialApi: MaterialApi, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap(data => {
        this.categoryId = data["categoryId"]
        return this.materialApi.getMaterials({ offset: 0, per_page: 10, material_categories: data["categoryId"] })
      }
      ))
      .subscribe(data => {
        this.materials = data
      })
    // this.categoryId = this.route.snapshot.params.categoryId

    this.materialCategoryApi.getAllCategories().subscribe(data => {
      this.materialCategories = data
    })

    // this.materialApi.getMaterials({offset: 0,per_page: 10, material_categories: this.categoryId }).subscribe(data => {
    //   debugger
    //   this.materials = data
    // })
  }

  getCategoryByAge(item: MaterialListItemWP): CategoryWP {
    return item.categories.find(c => c.parent === 4)
  }

  getCategoryByActivity(item: MaterialListItemWP): CategoryWP {
    return item.categories.find(c => c.parent === 10)
  }

}
