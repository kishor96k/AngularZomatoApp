import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/common.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-restaurant-serving-food',
  templateUrl: './restaurant-serving-food.component.html',
  styleUrls: ['./restaurant-serving-food.component.css']
})
export class RestaurantServingFoodComponent implements OnInit {
  ngOnInit(): void {
    this.GetRestaurantServingByCategoryId('');
  }

  constructor(
    private Http: HttpClient,
    private router: Router,
    private Service: CommonService,
    private activatedroute: ActivatedRoute) {
    this.activatedroute.params.subscribe((res) => {
      this.currentCategoryId = res['id'];
      console.log(res, "food by id");
    })
  }

  currentCategoryId: any;
  restaurantList: any;


  GetRestaurantServingByCategoryId(currentCategoryId: any) {
    this.Service.GetRestaurantServingByCategoryId(this.currentCategoryId).subscribe((res) => {
      console.log(res, "restaurant list");
      this.restaurantList = res.data;
    })
  }
  navigateToOrder(restaurantID: any) {
    this.router.navigate(['/restaurant-food-item', restaurantID, this.currentCategoryId]);
    console.log(['/restaurant-food-item', restaurantID, this.currentCategoryId],"resto food item");
    
  }
}
