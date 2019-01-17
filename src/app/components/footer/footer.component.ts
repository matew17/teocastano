import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  instaLogo: {} = {
    img: 'https://res.cloudinary.com/teocastano/image/upload/f_auto/v1547693359/teocastano.com/is.png',
    url: 'https://www.instagram.com/teocastanoweb/'
  };

  constructor() { }

  ngOnInit() {
  }

}
