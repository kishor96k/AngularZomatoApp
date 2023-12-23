import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  ngOnInit(): void {
    this.loadAllFoodCategory();
  }
  constructor(
    private Http: HttpClient,
    private Service: CommonService,
    private router: Router) { }

  FoodItems: any;

  loadAllFoodCategory() {
    this.Service.getFoods().subscribe((res) => {
      console.log(res, "all foods");
      this.FoodItems = res.data;
    })
  }
  navigateToRestoFoods(id: any) {
    this.router.navigate(['/restaurants-food', id])
  }
}
