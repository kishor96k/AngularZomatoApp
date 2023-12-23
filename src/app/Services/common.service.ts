import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  path: any = 'https://freeapi.miniprojectideas.com/api/zomato/';
  constructor(private http: HttpClient) { }


  // Register user
  Register(Object: any): Observable<any> {
    return this.http.post(this.path + "AddNewUser", Object);
  }

  // login User
  Login(Obj: any): Observable<any> {
    return this.http.post(this.path + "Login", Obj);
  }

  //add to cart
  addtoCart(obj: any): Observable<any> {
    return this.http.post(this.path + "AddToCart", obj);
  }
  // get all foods
  getFoods(): Observable<any> {
    return this.http.get(this.path + 'GetAllFoodCategory');
  }

  //get restaurnt list ny food id
  GetRestaurantServingByCategoryId(FoodCategoryId: any): Observable<any> {
    return this.http.get(this.path + 'GetRestaurantServingByCategoryId?categoryId=' + FoodCategoryId);
  }

  //get food by restaurant by category
  GetFoodItemOfRestaurantByCategory(restaurantId: any, categoryId: any): Observable<any> {
    return this.http.get(this.path + 'GetFoodItemOfRestaurantByCategory?restaurantId=' + restaurantId + '&categoryId=' + categoryId);
  }

  //add to card item
  GetCartItemsByCustomerIdForRestaurant(customerId: any, restaurantId: any): Observable<any> {
    return this.http.get(this.path + 'GetCartItemsByCustomerIdForRestaurant?customerId=' + customerId + '&restaurantId=' + restaurantId)
  }

  //update cart quantity
  UpdateCartQuantity(Obj: any): Observable<any> {
    return this.http.post(this.path + 'UpdateCartQuantity', Obj);
  }

  //place order
  placeOrder(Obj: any): Observable<any> {
    return this.http.post(this.path+ 'AddNewOrder' , Obj);
  }

}
