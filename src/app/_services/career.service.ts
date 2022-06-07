import { Injectable } from "@angular/core";
import { Carrera } from "@app/electivas/electivas.model";

@Injectable({
  providedIn: "root",
})
export class CareerService {
  constructor() {}

  get(): Carrera[] {
    return [
      {
        id: "civil",
        iconClass: "fa-building",
        nombreCompleto: "Ingeniería Civil",
        nombreCorto: "Ing. Civil",
        horasTotales: 14,
        airTable: "Civil",
        contacto: {
          instagram: "consejerosdecivil",
          messenger: "consejeros.civil",
          whatsapp: "",
        },
      },
      {
        id: "electrica",
        iconClass: "fa-bolt",
        nombreCompleto: "Ingeniería Eléctrica",
        nombreCorto: "Ing. Eléctrica",
        horasTotales: 20,
        airTable: "Eléctrica",
        contacto: {
          instagram: "consejeroselectrica",
          messenger: "consejeroselectrica.metas",
          whatsapp: "",
        },
      },
      {
        id: "industrial",
        iconClass: "fa-industry",
        nombreCompleto: "Ingeniería Industrial",
        nombreCorto: "Ing. Industrial",
        horasTotales: 10,
        airTable: "Industrial",
        contacto: {
          instagram: "industrialconsejeros",
          messenger: "consejeroselectrica.metas",
          whatsapp: "",
        },
      },
      {
        id: "mecanica",
        iconClass: "fa-cogs",
        nombreCompleto: "Ingeniería Mecánica",
        nombreCorto: "Ing. Mecánica",
        horasTotales: 10,
        airTable: "Mecánica",
        contacto: {
          instagram: "mecanicametas",
          messenger: "metas.mecanica.frsf",
          whatsapp: "",
        },
      },
      {
        id: "sistemas",
        iconClass: "fa-laptop",
        nombreCompleto: "Ingeniería en Sistemas",
        nombreCorto: "Ing. en Sistemas",
        horasTotales: 44,
        airTable: "Sistemas",
        contacto: {
          instagram: "ps_metas.frsf",
          messenger: "psutnfrsf",
          whatsapp: "",
        },
      },
    ];
  }
}
