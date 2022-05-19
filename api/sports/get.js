const environment = require("../_helpers/environment");
const cuenta = environment.serverConfig.airtable.cuentas
  .filter((Cuenta) => Cuenta.id === "ceut")
  .pop();

//Se configura el objeto Airtable para hacer las consultas y obtener datos con los métodos
const airtable = require("airtable");
airtable.configure({
  endpointUrl: environment.serverConfig.airtable.endpointUrl,
  apiKey: cuenta.key,
});

const base = cuenta.bases.filter((Base) => Base.nombre).pop(); // Arreglar esta asquerosidad. No permite tener más de una BD - RO - 12/04/2020
const baseConnection = airtable.base(base.url);

/**
 * Devuelve un deporte particular, en base a su nombre
 * @param deporte - String del deporte
 * @returns {Promise<Array>}
 */
//TODO: Mover a su propio archivo [id].js
async function getById(deporte) {
  //TODO: Implementar este método
  return [];
}

/**
 * Devuelve todos los deportes
 * @returns {Promise<Array>}
 */
export default async function get(req, res) {
  const deportes = await obtenerDeportesDesdeAirtable();
  res.json(deportes);
}

async function obtenerDeportesDesdeAirtable() {
  return new Promise((resolve, reject) => {
    let result = [];
    baseConnection("deportes")
      .select({ view: "Grid view" })
      .eachPage(
        (records, fetchNextPage) => {
          result = records.map((Record) => Record.fields);
          fetchNextPage();
        },
        (error) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
  });
}
