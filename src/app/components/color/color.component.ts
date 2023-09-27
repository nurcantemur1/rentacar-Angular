import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  list:Car[] = [];
  colors: Color[] = [];
  currentColor: Color;
  constructor(private colorService: ColorService,private carService:CarService) {}
  ngOnInit(): void {
    this.getAllColor();
  }
  getAllColor() {
    this.colorService.getAllColor().subscribe((response) => {
      this.colors = response.data;
    });
  }
  setCurrentColor(color: Color) {
    this.currentColor = color;
    console.log(this.currentColor);
  }
  getCurrentColor(color: Color) {
    if (this.currentColor == color) {
      return 'list-group-item-warning';
    } else return 'list-group-item';
  }
  getColor(colorId){
    this.carService.getCarsByColor(colorId).subscribe(responce=>{
      this.list =responce.data
    });
    console.log(this.list.length);
    return this.list.length;
  }
}
