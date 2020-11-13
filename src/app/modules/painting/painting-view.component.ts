import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryApi } from 'src/app/api/category.api';
import { PaintingApi } from 'src/app/api/painting.api';
import { PostApi } from 'src/app/api/post.api';
import { CategoryWP, PaintingListItemWP, PostWP, QueryResultBase } from 'src/app/types/models';

@Component({
  selector: 'tnx-painting-view',
  templateUrl: './painting-view.component.html',
})
export class PaintingViewComponent implements OnInit {
  countryCat : CategoryWP
  yearCat : CategoryWP
  paintingCategories: CategoryWP[]
  paintingCategoriesFlat: CategoryWP[]

  paintings: PaintingListItemWP[]

  quantity = 18
  page = 1
  total: number
  loading: boolean

  search: string = ''
  year: string
  country: string

  constructor(private route: ActivatedRoute, private paintingApi: PaintingApi) { }

  ngOnInit(): void {
    this.paintingCategories =  this.route.snapshot.data.cat.categories
    this.yearCat = this.paintingCategories.find(x => x.id === 28)
    this.countryCat  = this.paintingCategories.find(x => x.id === 27)
    this.fetch(this.page).subscribe(data => {
      this.paintings = data.items as PaintingListItemWP[]
      this.total = data.count
    })
  }

  trackByFn(index, item) {
    return item.id
  }

  loadMore() {
    this.loading = true
    this.page += 1
    this.fetch(this.page).subscribe((data => {
      this.loading = false
      this.paintings.push(...data.items)
    }))
  }

  private fetch(page) {
    const skip = (page - 1) * this.quantity
    return this.paintingApi.getPaintings({ offset: skip, per_page: this.quantity }, this.year, this.country, this.search)
  }

  onYearSelected(value:string){
    this.year = value
    this.page = 1
    this.paintings = []
    this.loading = true
    this.fetch(this.page).subscribe(data => {
      this.loading = false
      this.paintings = data.items as PaintingListItemWP[]
      this.total = data.count
    })
  }

  onCountrySelected(value:string){
    this.country = value
    this.page = 1
    this.paintings = []
    this.loading = true
    this.fetch(this.page).subscribe(data => {
      this.loading = false
      this.paintings = data.items as PaintingListItemWP[]
      this.total = data.count
    })
  }

  onSearch(value:string) {
    this.search = value
    this.page = 1
    this.paintings = []
    this.loading = true
    this.fetch(this.page).subscribe(data => {
      this.loading = false
      this.paintings = data.items as PaintingListItemWP[]
      this.total = data.count
    })
  }
}
