import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PaintingCategoryApi } from 'src/app/api/painting-category.api';
import { CategoryWP } from 'src/app/types/models';


@Injectable({
    providedIn: 'root'
})
export class PaintingCategoryResolveService  implements Resolve<Observable<CategoryWP>> {
    constructor(
        private router: Router,
        private paintingCategoryApi: PaintingCategoryApi
      ) {}
      resolve(route: ActivatedRouteSnapshot) {
        return this.paintingCategoryApi.getAllCategories()
      }
}
