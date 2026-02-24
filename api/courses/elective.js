const sanityConnector = require("../_helpers/sanity-connector");

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
    docentes: e.docentes,
    actividades: e.instanciasDeEvaluacion,
    tipoDeAprobacion: e.tipoDeAprobacion,
    aprobadasParaRendir: e.aprobadasParaRendir?.join(", "),
    aprobadasParaCursar: e.aprobadasParaCursar?.join(", "),
    cursadasParaCursar: e.cursadasParaCursar?.join(", "),
    comentarios: e.comentarios ? e.comentarios.split("\n") : [],
  }));

  res.json(result);
}
