import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowerComponent } from './flower/flower.component';
import { ShopComponent } from './shop/shop.component';
import { SingleFlowerComponent } from './single-flower/single-flower.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowerComponent,
    ShopComponent,
    SingleFlowerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
