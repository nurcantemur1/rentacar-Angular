import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponceModel';
import { Rental } from '../models/rental';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44308/api/Rentals/";

  constructor(private httpClient:HttpClient) { }

  getAllRental():Observable<ListResponseModel<Rental>>{
    console.log("geldi");
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl + "getall");

  }

}
