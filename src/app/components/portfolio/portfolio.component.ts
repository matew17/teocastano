import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio: Array<{}>;

  constructor() {
    this.portfolio = [
      {
        title: 'Sitios web',
        desc: 'Sitios web que se adaptan a todos los dispositivos en el mercado actual.',
        img: 'https://res.cloudinary.com/teocastano/image/upload/f_auto/v1547689400/teocastano.com/coding.svg'
      },
      {
        title: 'Aplicaciones web a la medida',
        desc: 'Desarrollamos aplicaciones Web y las adaptamos a sus necesidades,  hacemos seguimiento desde el inicio hasta el fin del desarollo.',
        img: 'https://res.cloudinary.com/teocastano/image/upload/f_auto/v1547689277/teocastano.com/beard.svg'
      },
      {
        title: 'Apps moviles',
        desc: 'Desarrollamos aplicaciones moviles de acuerdo a sus necesidades.',
        img: 'https://res.cloudinary.com/teocastano/image/upload/f_auto/v1547689835/teocastano.com/android.svg'
      },
    ];
  }

  ngOnInit() { }

}
