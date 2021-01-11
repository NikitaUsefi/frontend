import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";

@Component({
selector:'app-product-card',
templateUrl:'product-card.component.html',
styleUrls:['product-card.component.css']

})
export class ProductCardComponent{
  @Input() property:IProperty

}
