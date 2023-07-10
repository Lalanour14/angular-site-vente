import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowerComponent } from './flower/flower.component';
import { ShopComponent } from './shop/shop.component';
import { SingleFlowerComponent } from './single-flower/single-flower.component';

const routes: Routes = [
  { path: '', component: FlowerComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'flower/:id', component: SingleFlowerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
