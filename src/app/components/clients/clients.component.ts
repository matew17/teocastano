import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Array<{}> = [
    {
      name: 'Tanaka',
      img: 'https://res.cloudinary.com/teocastano/image/upload/f_auto/v1547681049/teocastano.com/tanaka-bmp.bmp',
      web: 'http://tanakaservicesparts.com/inicio/'
    },
    {
      name: 'Actum',
      img: 'https://res.cloudinary.com/teocastano/image/upload/f_auto/v1547681050/teocastano.com/LOGOS-ACTUM-02-300x90.png',
      web: 'http://actum.com.co/'
    }
  ];

  constructor() { }

  ngOnInit() { }

}
