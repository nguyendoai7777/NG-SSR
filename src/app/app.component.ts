import { Component, OnInit } from '@angular/core';
import { AppSeoService } from './app-seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ssr';
  constructor(
    private readonly appSeoService: AppSeoService
  ) {
  }
  ngOnInit() {
    this.appSeoService.initHead();
  }

}
