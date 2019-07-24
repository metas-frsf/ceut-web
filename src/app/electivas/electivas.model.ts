export class Periodo {
  primero: boolean;
  segundo: boolean;
  anual: boolean;
}

export class Carrera {
  id: string;
  iconClass: string;
  nombreCompleto: string;
  nombreCorto: string;
  horasTotales: number;
  airTable: string;
  contacto?: Contacto;
}

export class Contacto {
  instagram: string;
  messenger: string;
  whatsapp?: string;
}

export class Electiva {
  vistaCompleta: boolean;
  cursada: boolean;
  aprobada: boolean;
  nombre: string;
  nivel: string;
  area: string;
  creditos: number;
  cuatrimestre: string;
  horarios: string[];
  docentes: string[];
  actividades: string;
  tipoDeAprobacion: string;
  cursadasParaCursar: string[];
  aprobadasParaRendir: string[];
  aprobadasParaCursar: string[];
  comentarios: string[];
}
