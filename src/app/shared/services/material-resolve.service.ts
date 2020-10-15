import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MaterialApi } from 'src/app/api/material.api';
import { MaterialWP } from 'src/app/types/models';

@Injectable({
    providedIn: 'root'
})
export class MaterialResolveService  implements Resolve<Observable<MaterialWP>> {
    constructor(
        private router: Router,
        private materialApi: MaterialApi
      ) {}
      resolve(route: ActivatedRouteSnapshot) {
        const materialId = route.paramMap.get('materialId')
        return this.materialApi.getMaterialById(materialId)
      }
}
