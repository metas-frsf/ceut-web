import type { VercelRequest, VercelResponse } from '@vercel/node';
import { client } from '../_helpers/sanity-connector.js';

interface SanityElectiva {
  nombre: string;
  nivel: string;
  area: string;
  creditos: number;
  cuatrimestre: string;
  horarios: string | null;
  docentes: string | null;
  instanciasDeEvaluacion: string;
  tipoDeAprobacion: string;
  cursadasParaCursar: string[] | null;
  aprobadasParaCursar: string[] | null;
  aprobadasParaRendir: string[] | null;
  comentarios: string | null;
}

interface ElectivaResponse {
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

const TIPO_APROBACION_LABELS = Object.freeze({
  promocionDirecta: 'Promoción directa',
  regularOPromocion: 'Regular o Promoción directa',
  soloPromocion: 'Sólo Promoción directa',
} as const);

function mapElectivaToResponse(e: SanityElectiva): ElectivaResponse {
  const labels: Record<string, string> = TIPO_APROBACION_LABELS;

  return {
    vistaCompleta: false,
    cursada: false,
    aprobada: false,
    nombre: e.nombre,
    nivel: e.nivel,
    area: e.area,
    creditos: e.creditos,
    cuatrimestre: e.cuatrimestre,
    horarios: e.horarios ? e.horarios.split('\n') : [],
    docentes: e.docentes ? e.docentes.split(', ') : [],
    actividades: e.instanciasDeEvaluacion,
    tipoDeAprobacion: labels[e.tipoDeAprobacion] ?? e.tipoDeAprobacion,
    aprobadasParaRendir: e.aprobadasParaRendir ?? [],
    aprobadasParaCursar: e.aprobadasParaCursar ?? [],
    cursadasParaCursar: e.cursadasParaCursar ?? [],
    comentarios: e.comentarios ? e.comentarios.split('\n') : [],
  };
}

export default async function getElectives(req: VercelRequest, res: VercelResponse): Promise<void> {
  const carrera = Array.isArray(req.query.carrera) ? req.query.carrera[0] : req.query.carrera;
  const carreraElegida = carrera ?? 'Sistemas';

  const query = `*[_type == "materia" && esElectiva == true && carrera->nombre == $carrera]{
    nombre,
    nivel,
    "area": area->nombre,
    creditos,
    cuatrimestre,
    horarios,
    docentes,
    instanciasDeEvaluacion,
    tipoDeAprobacion,
    "cursadasParaCursar": cursadasParaCursar[]->nombre,
    "aprobadasParaCursar": aprobadasParaCursar[]->nombre,
    "aprobadasParaRendir": aprobadasParaRendir[]->nombre,
    comentarios
  }`;

  const electivas = await client.fetch<SanityElectiva[]>(query, { carrera: carreraElegida });
  res.json(electivas.map(mapElectivaToResponse));
}
