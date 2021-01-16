import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Property } from '../model/property';
import { IProperty } from '../model/iproperty';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}
  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray=>{
        return propertiesArray.find(p=>p.Id===id);
      })
    );
  }
  getAllProperties(SellRent?: number): Observable<Property[]> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<Property> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp'));

        if (localProperties) {
          for (const id in localProperties) {
            //if we want to filter our properties by sellRent

            if(SellRent){
              if (
                localProperties.hasOwnProperty(id) &&
                localProperties[id].SellRent === SellRent
              )
                propertiesArray.push(localProperties[id]);
            }
              //if we want all the data
            else propertiesArray.push(localProperties[id]);
          }
        }
        for (const id in data) {
          //if we want to filter our properties by sellRent
         if(SellRent){
          if (
            data.hasOwnProperty(id) &&
            data[id].SellRent === SellRent
          )
            propertiesArray.push(data[id]);
         }
             //if we want all the data
          else propertiesArray.push(data[id]);
        }
        return propertiesArray;
      })
    );
  }
  addProperty(property: Property) {
    let newProp = [property];
    if (localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp'))];
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }
  newPropID() {
    let PID = '101';
    if (localStorage.getItem('PID'))
      PID = String(+localStorage.getItem('PID') + 1);

    localStorage.setItem('PID', PID);
    return PID;
  }
}
