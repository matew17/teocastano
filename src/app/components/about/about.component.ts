import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  aboutImg: string = "http://res.cloudinary.com/teocastano/image/upload/c_scale,f_auto,w_1379/v1534474337/teocastano.com/about.jpg";
  content = {
    title: {
      up: 'Acerca',
      down: 'de nosotros.'
    },
    description: `Somos una StartUp que se dedica al desarrollo de soluciones digitales (Sitios Web, aplicaciones a la medida, Apps Moviles), estamos ubicados en Medellin (Ant).`
  }

  constructor() { }

  ngOnInit() { }

}
