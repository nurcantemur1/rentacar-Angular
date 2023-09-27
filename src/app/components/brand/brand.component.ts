import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand:Brand;
  constructor(private brandService: BrandService) {}
  ngOnInit(): void {
    this.getAllBrands();
  }
  getAllBrands() {
    this.brandService.getAllBrand().subscribe((response) => {
      this.brands = response.data;
      console.log(this.brands);
    });
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
    console.log(this.currentBrand);
  }
  
  getCurrentBrand(brand:Brand){
    if(this.currentBrand== brand){
      return 'list-group-item-warning';
    } else return 'list-group-item';
  }
}
