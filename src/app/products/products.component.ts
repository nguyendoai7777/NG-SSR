import { Component, OnInit } from '@angular/core';
import { AppSeoService } from '../app-seo.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private readonly appSeoService: AppSeoService) { }

  ngOnInit(): void {
    this.appSeoService.createMultipleMetaTag([
      {
        name: 'products',
        content: 'All of products'
      },
      {
        name: 'View-ms',
        content: 'View all'
      }
    ]);
    this.appSeoService.updateTitle('Products Views')
  }

}
