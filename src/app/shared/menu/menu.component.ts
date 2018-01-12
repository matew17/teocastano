import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  items: any[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      { name: "Inicio", url: "#inicio" },
      { name: "Acerca", url: "#acerca" },
      { name: "Clientes", url: "#clientes" },
      { name: "Portafolio", url: "#portafolio" },
      { name: "Contacto", url: "#contacto" }
    ];
  }
}
