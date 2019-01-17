import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  items: {}[] = [];
  logo: string = 'https://res.cloudinary.com/teocastano/image/upload/f_auto/v1534474298/teocastano.com/teologo.png';
  constructor() { }

  ngOnInit() {
    this.items = [
      { name: "Acerca", url: "#acerca" },
      { name: "Portafolio", url: "#portafolio" },
      { name: "Clientes", url: "#clientes" },
      { name: "Contacto", url: "#contacto" }
    ];
  }
}
