import { Component, OnInit } from '@angular/core';
import {Image} from './image.interface';
import { CarouselConfig } from 'ng2-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
})

export class HomeComponent implements OnInit {

  images:Image[];

  constructor() { }

  ngOnInit() {
     this.getImages();
  }


  getImages(){
    this.images = [ {"url":"../assets/slide/1.jpg","title":"salad"},
                    {"url":"../assets/slide/2.jpg","title":"Sandwitch"},
                    {"url":"../assets/slide/3.jpg","title":"Soup"},
                    {"url":"../assets/slide/4.jpg","title":"Snacks"},
                    {"url":"../assets/slide/5.jpg","title":"Pizza"}];
  }

}
