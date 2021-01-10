import { Component } from "@angular/core";

@Component({
selector:'app-product-card',
templateUrl:'product-card.component.html',
styleUrls:['product-card.component.css']

})
export class ProductCardComponent{
  Property:any={
    "Id":1,
    "Type":"House",
    "Price":12000,
    "Name":"Biria House"
  }
}
