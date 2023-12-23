import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-restaurant-food-item',
  templateUrl: './restaurant-food-item.component.html',
  styleUrls: ['./restaurant-food-item.component.css']
})
export class RestaurantFoodItemComponent implements OnInit {

  ngOnInit(): void {
    this.GetFoodItemOfRestaurantByCategory();
    this.GetCartItemsByCustomerIdForRestaurant();
  }

  constructor(
    private Http: HttpClient,
    private Service: CommonService,
    private router: Router,
    private ActivateRoute: ActivatedRoute
  ) {
    this.ActivateRoute.params.subscribe((res) => {
      console.log(res, "resturant serving item");
      this.restaurantId = res['restaurantId'];
      this.categoryId = res['catogoryId'];

    })

    const localData = localStorage.getItem('Zomato_User');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);

    }
  }

  restaurantId: any;
  categoryId: any;
  restoFoodItems: any;
  loggedUserData: any;
  cardItems: any;
  totalAmount: number = 0;
  deliveryAddress: any;

  // get food item

  GetFoodItemOfRestaurantByCategory() {
    this.Service.GetFoodItemOfRestaurantByCategory(this.restaurantId, this.categoryId).subscribe((res) => {
      this.restoFoodItems = res.data;
      console.log(res, "item serving by restaurant");
    })
  }

  // get cart
  GetCartItemsByCustomerIdForRestaurant() {
    this.Service.GetCartItemsByCustomerIdForRestaurant(this.loggedUserData.userId, this.restaurantId).subscribe((res) => {
      this.cardItems = res.data;
      console.log(res, "added cart items");
      this.cardItems.forEach((Element: { price: number; }) => {
        this.totalAmount = this.totalAmount + Element.price;
        console.log(this.totalAmount, "Total Amount added in the cart");
      });
    })
  }

  //add to card items
  addToCart(itemId: any) {
    const localData = localStorage.getItem('Zomato_User');
    if (localData === null) {
      alert("Please Login");
    } else {
      this.loggedUserData = JSON.parse(localData);
      const CartObj = {
        "customerId": this.loggedUserData.userId,
        "itemId": itemId,
        "quantity": 1.
      };
      this.Service.addtoCart(CartObj).subscribe((res) => {
        if (res.result) {
          alert(res.message);
          this.GetCartItemsByCustomerIdForRestaurant();
        } else {
          alert(res.message);
        }
      })
    }
  }


  //place the order
  placeOrder() {
    const obj: {} = {
      "userId": this.loggedUserData.userId,
      "totalAmount": this.totalAmount,
      "restaurantId": this.restaurantId,
      "deliveryAddress": this.deliveryAddress
    }
    this.Service.placeOrder(obj).subscribe((res) => {
      if (res.result) {
        alert("order Placed");
        this.GetCartItemsByCustomerIdForRestaurant();
        this.deliveryAddress = '';
      } else {
        alert(res.message);
      }
    })
  }



}
