import { NavigationServiceService } from './../../navigation-service.service';
import { Component, Directive, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})

export class ProductOverviewComponent{

  constructor(private navigation: NavigationServiceService) { }


  back(){
    this.navigation.back()
  }

  

}
