import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: Array<any>=[
    {
    "Id":1,
    "Name":"Biria House",
    "Type":"House",
    "Price":12000
   },
   {
    "Id":2,
    "Name":"Erose House",
    "Type":"House",
    "Price":14300
   },
   {
    "Id":3,
    "Name":"Niki House",
    "Type":"House",
    "Price":90000000
   },
   {
    "Id":4,
    "Name":"Macro House",
    "Type":"House",
    "Price":145200
   },
   {
    "Id":5,
    "Name":"Pearl white House",
    "Type":"House",
    "Price":18000
   },
]
  constructor() { }

  ngOnInit(): void {
  }

}
