import { Injectable } from '@angular/core';
import { Carrera } from '@app/electivas/electivas.model';

@Injectable({
  providedIn: 'root',
})
export class CareerService {
  constructor() {}

  get(): Carrera[] {
    return [
      {
        id: 'civil',
        iconClass: 'fa-building',
        nombreCompleto: 'Ingeniería Civil',
        nombreCorto: 'Ing. Civil',
        horasTotales: 14,
        carrera: 'Civil',
        contacto: {
          instagram: 'consejerosdecivil',
          messenger: '',
          whatsapp: '',
        },
      },
      {
        id: 'electrica',
        iconClass: 'fa-bolt',
        nombreCompleto: 'Ingeniería Eléctrica',
        nombreCorto: 'Ing. Eléctrica',
        horasTotales: 20,
        carrera: 'Eléctrica',
        contacto: {
          instagram: 'consejeroselectrica',
          messenger: '',
          whatsapp: '',
        },
      },
      {
        id: 'industrial',
        iconClass: 'fa-industry',
        nombreCompleto: 'Ingeniería Industrial',
        nombreCorto: 'Ing. Industrial',
        horasTotales: 10,
        carrera: 'Industrial',
        contacto: {
          instagram: 'industrialconsejeros',
          messenger: '',
          whatsapp: '',
        },
      },
      {
        id: 'mecanica',
        iconClass: 'fa-cogs',
        nombreCompleto: 'Ingeniería Mecánica',
        nombreCorto: 'Ing. Mecánica',
        horasTotales: 10,
        carrera: 'Mecánica',
        contacto: {
          instagram: 'mecanicametas',
          messenger: '',
          whatsapp: '',
        },
      },
      {
        id: 'sistemas',
        iconClass: 'fa-laptop',
        nombreCompleto: 'Ingeniería en Sistemas',
        nombreCorto: 'Ing. en Sistemas',
        horasTotales: 40,
        carrera: 'Sistemas',
        contacto: {
          instagram: 'sistemas_metas.frsf',
          messenger: '',
          whatsapp: '',
        },
      },
    ];
  }
}
