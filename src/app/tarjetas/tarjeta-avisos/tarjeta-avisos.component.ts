import { Component } from "@angular/core";

@Component({
  selector: "app-tarjeta-avisos",
  templateUrl: "./tarjeta-avisos.component.html",
  styleUrls: ["../tarjetas.component.scss"],
})
export class TarjetaAvisosComponent {
  // baseUrl = '/ceut-frsf';
  baseUrl = "";

  tarjetasAvisos: TarjetaAviso[] = [
    {
      image: "../assets/img/becas-utn-frsf.png",
      link: "https://www.frsf.utn.edu.ar/estudiantes/becas",
      enabled: true,
      caption: "",
    },
    {
      image: "../assets/img/biblioteca-ceut.png",
      link:
        "https://api.onedrive.com/v1.0/shares/u!aHR0cHM6Ly8xZHJ2Lm1zL3gvcyFBbmZJTUNncTlycE5oZUJISnpjcDl5R21tak1zeGc/root/content",
      enabled: true,
      caption: "",
    },
    {
      image: "../assets/img/cursos_extracurriculares.png",
      link: "http://capacitacion.frsf.utn.edu.ar/",
      enabled: true,
      caption: "",
    },
  ];

  constructor() {}
  // TODO: Tomar los datos que van en esta sección usando la API de Instagram y añadidos a mano propios
}

class TarjetaAviso {
  image: string;
  link: string;
  enabled: boolean;
  caption: string;
}
