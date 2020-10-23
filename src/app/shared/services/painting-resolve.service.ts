import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PaintingApi } from 'src/app/api/painting.api';

import { PaintingWP } from 'src/app/types/models';

@Injectable({
    providedIn: 'root'
})
export class PaintingResolveService  implements Resolve<Observable<PaintingWP>> {
    constructor(
        private router: Router,
        private paintingApi: PaintingApi
      ) {}
      resolve(route: ActivatedRouteSnapshot) {
        const paintingId = route.paramMap.get('paintingId')
        return this.paintingApi.getPaintingById(paintingId)
      }
}
