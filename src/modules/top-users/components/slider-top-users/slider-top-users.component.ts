import { Component, OnInit } from '@angular/core';
import SwiperCore, { Mousewheel, Scrollbar } from "swiper";

@Component({
  selector: 'app-slider-top-users',
  templateUrl: './slider-top-users.component.html',
  styleUrls: ['./slider-top-users.component.scss']
})
export class SliderTopUsersComponent implements OnInit {

  constructor() {
    SwiperCore.use([Scrollbar, Mousewheel]);
   }

  ngOnInit(): void {
  }
  
  

  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
