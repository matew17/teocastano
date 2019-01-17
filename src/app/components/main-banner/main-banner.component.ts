import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent implements OnInit {

  bannerImg: string = 'http://res.cloudinary.com/teocastano/image/upload/c_scale,f_auto,w_1400/v1534474357/teocastano.com/banner.jpg';
  constructor() { }

  ngOnInit() { }

}
