import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
import { Rental } from 'src/app/models/rental';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: any;
  cars:Car[]=[]
  rentals:Rental[]=[];
  constructor(
    private carService: CarService,
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetails(params['carId']);
      } else {
        console.log('car yok');
      }
    });
  }
  getCarDetails(carId:number) {
    this.carService.getCar(carId).subscribe((response) => {
      this.car = response.data;
      console.log(this.car);
    });
    
  }
  kirala(car:any){
    this.rentalService.getAllRental().subscribe(responce=>this.rentals= responce.data)
    for(let rental of this.rentals){
      if(rental.carId===car.id && rental.returnDate===null){
          this.toastrService.error("kiralanamaz");
          break;
      }
      else{
        this.toastrService.success("kiralandı");
        break;
      }
    }
  }

}
