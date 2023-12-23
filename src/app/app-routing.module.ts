import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './Components/foods/foods.component';
import { RestaurantFoodItemComponent } from './Components/restaurant-food-item/restaurant-food-item.component';
import { RestaurantServingFoodComponent } from './Components/restaurant-serving-food/restaurant-serving-food.component';

const routes: Routes = [

  {
    path: 'foods',
    component: FoodsComponent
  },
  {
    path: 'restaurants-food/:id',
    component: RestaurantServingFoodComponent
  },
  {
    path: 'restaurant-food-item/:restaurantId/:catogoryId',
    component: RestaurantFoodItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
