import { Component, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';
import { HousingService } from '../../services/housing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent=1;
  Properties: Array<IProperty>;
  constructor( private route:ActivatedRoute, private houseingService:HousingService ) { }

  ngOnInit(): void {
      if(this.route.snapshot.url.toString()){
        this.SellRent=2;//it means that we are on the rent property url else we are on the base url
      }
      this.houseingService.getAllProperties(this.SellRent).subscribe(
        data=>{
          this.Properties=data;

        },error=>{

          console.log(error)
        }
      );

  }

}
