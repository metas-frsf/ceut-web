const environment = require("api/_helpers/environment");
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

module.exports = {
  get,
  getAll,
};

/**
 * Devuelve un deporte particular, en base a su nombre
 * @param deporte - String del deporte
 * @returns {Promise<Array>}
 */
async function get(deporte) {
  //TODO: Implementar este método
  return [];
}

// TODO: Borrar los console.log - 12/04/2020 - RO
/**
 * Devuelve todos los deportes
 * @returns {Promise<Array>}
 */
async function getAll() {
  let result = [];
  return new Promise((resolve, reject) => {
    baseConnection("deportes")
      .select({ view: "Grid view" })
      .eachPage(
        (records, fetchNextPage) => {
          result = records.map((Record) => Record.fields);
          fetchNextPage();
        },
        (error) => {
          if (error) {
            console.error(error);
            reject(error);
          } else {
            console.log(result);
            resolve(result);
          }
        }
      );
  });
}
