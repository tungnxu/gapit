import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtMainComponent } from './art-main.component';
import { BinhChonComponent } from './binh-chon/binh-chon.component';
import { DangKyGVComponent } from './dang-ky-gv/dang-ky-gv.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { TheLeComponent } from './the-le/the-le.component';
import { ThuVienComponent } from './thu-vien/thu-vien.component';
import { XemKetQuaComponent } from './xem-ket-qua/xem-ket-qua.component';

const routes: Routes = [
  {
    path: '',
    component: ArtMainComponent,
    children: [
      {
        path: 'dang-ky',
        component: DangKyComponent
      },
      {
        path: 'dang-ky-gv',
        component: DangKyGVComponent
      },
      {
        path: 'xem-ket-qua',
        component: XemKetQuaComponent
      },
      {
        path: 'the-le',
        component: TheLeComponent
      },
      {
        path: 'thu-vien',
        component: ThuVienComponent
      },
      {
        path: 'binh-chon',
        component: BinhChonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtMainRoutingModule { }
