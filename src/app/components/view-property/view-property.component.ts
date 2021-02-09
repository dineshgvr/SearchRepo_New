import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.scss']
})
export class ViewPropertyComponent implements OnInit {
  slides = [
    {img: "assets/images/exteranl-images/background.png"},
    {img: "assets/images/exteranl-images/background.png"},
    {img: "assets/images/exteranl-images/background.png"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 4, "autoplay": true, "centerMode": false };
  
  constructor() { }

  ngOnInit(): void {
  }

}
