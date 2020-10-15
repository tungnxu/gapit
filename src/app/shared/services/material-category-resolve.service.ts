import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MaterialCategoryApi } from 'src/app/api/material-category.api';
import { MaterialApi } from 'src/app/api/material.api';
import { MaterialWP } from 'src/app/types/models';

@Injectable({
    providedIn: 'root'
})
export class MaterialCategoryResolveService  implements Resolve<Observable<MaterialWP>> {
    constructor(
        private router: Router,
        private materialCategoryApi: MaterialCategoryApi
      ) {}
      resolve(route: ActivatedRouteSnapshot) {
        return this.materialCategoryApi.getAllCategories()
      }
}
