import {Moment} from 'moment';

export class Repair {
  private repairId: number;
  private clientId: number;
  private manufacturer: string;
  private model: string;
  private note: string;
  private issue: string;
  private statusId: number;
  private checkInDate: Moment;
  private lastUpdateDate: Moment;
  private checkoutDate: Moment;
  private repairPrice: number;
  private repairCost: number;
}

export class RepairLegacy {
  public apellidoCliente: string;
  public encendido: 0;
  public estado: string;
  public fechaIngreso: string;
  public fechaReparacionTerminada: string;
  public fechaUltimaActualizacion: string;
  public horaUltimaActualizacion: string;
  public problema: string;
  public imei: string;
  public marca: string;
  public message: string;
  public modelo: string;
  public nombreCliente: string;
  public nota: string;
  public precioReparacion: string;
  public repairId: number;
  public seniaReparacion: string;
  public status: string;
  public tipoEquipoId: number;
  public nombreApellidoCliente: string;
  public emailCliente: string;
  public telefonoCliente: string | number;
  public costoReparacion: string;
}
