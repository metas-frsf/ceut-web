const environment = require("api/_helpers/environment");
const cuenta = environment.serverConfig.airtable.cuentas
  .filter((Cuenta) => Cuenta.id === "metas")
  .pop();

//Se configura el objeto Airtable para hacer las consultas y obtener datos con los métodos
const airtable = require("airtable");
airtable.configure({
  endpointUrl: environment.serverConfig.airtable.endpointUrl,
  apiKey: cuenta.key,
});

const base = cuenta.bases.filter((Base) => Base.nombre).pop(); // Arreglar esta asquerosidad. No permite tener más de una BD - RO - 12/04/2020
const baseConnection = airtable.base(base.url);

module.exports = {
  get,
};

async function get(carrera) {
  const carreraElegida = carrera ? carrera : "Sistemas";
  const electivas = await obtenerElectivasDesdeAirtable(carreraElegida);
  return electivas;
}

async function obtenerElectivasDesdeAirtable(carreraElegida) {
  return new Promise((resolve, reject) => {
    let result = [];
    baseConnection(carreraElegida)
      .select({ view: "Grid view" })
      .eachPage(
        (records, fetchNextPage) => {
          result = records
            .map((Record) => Record.fields)
            .map((Electiva) => ({
              vistaCompleta: false,
              cursada: false,
              aprobada: false,
              nombre: Electiva["Materia"],
              nivel: Electiva["Nivel"],
              area: Electiva["Área"],
              creditos: Electiva["Créditos"],
              cuatrimestre: Electiva["Cuatrimestre"],
              horarios: Electiva["Horarios"]
                ? Electiva["Horarios"].split("\n")
                : [],
              docentes: Electiva["Docentes"],
              actividades: Electiva["Instancias de Evaluación"],
              tipoDeAprobacion: Electiva["Tipo de Aprobacion"],
              aprobadasParaRendir: Electiva["Aprobadas para Rendir"],
              aprobadasParaCursar: Electiva["Aprobadas para Cursar"],
              cursadasParaCursar: Electiva["Cursadas para Cursar"],
              comentarios: Electiva["Comentarios"]
                ? Electiva["Comentarios"].split("\n")
                : [],
            }));
          fetchNextPage();
        },
        (error) => {
          if (error) {
            console.error(error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
  });
}
