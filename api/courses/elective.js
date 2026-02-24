const sanityConnector = require("../_helpers/sanity-connector");

const TIPO_APROBACION_LABELS = {
  promocionDirecta: "Promoción directa",
  regularOPromocion: "Regular o Promoción directa",
  soloPromocion: "Sólo Promoción directa",
};

export default async function get(req, res) {
  const { carrera } = req.query;
  const carreraElegida = carrera ? carrera : "Sistemas";

  const electivas = await sanityConnector.client.fetch(
    `*[_type == "materia" && esElectiva == true && carrera->nombre == $carrera]{
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
    }`,
    { carrera: carreraElegida }
  );

  const result = electivas.map((e) => ({
    vistaCompleta: false,
    cursada: false,
    aprobada: false,
    nombre: e.nombre,
    nivel: e.nivel,
    area: e.area,
    creditos: e.creditos,
    cuatrimestre: e.cuatrimestre,
    horarios: e.horarios ? e.horarios.split("\n") : [],
    docentes: e.docentes ? e.docentes.split(", ") : [],
    actividades: e.instanciasDeEvaluacion,
    tipoDeAprobacion:
      TIPO_APROBACION_LABELS[e.tipoDeAprobacion] || e.tipoDeAprobacion,
    aprobadasParaRendir: e.aprobadasParaRendir || [],
    aprobadasParaCursar: e.aprobadasParaCursar || [],
    cursadasParaCursar: e.cursadasParaCursar || [],
    comentarios: e.comentarios ? e.comentarios.split("\n") : [],
  }));

  res.json(result);
}
