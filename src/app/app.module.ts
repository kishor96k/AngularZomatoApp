import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsComponent } from './Components/foods/foods.component';
import { RestaurantServingFoodComponent } from './Components/restaurant-serving-food/restaurant-serving-food.component';
import { RestaurantFoodItemComponent } from './Components/restaurant-food-item/restaurant-food-item.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    RestaurantServingFoodComponent,
    RestaurantFoodItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
