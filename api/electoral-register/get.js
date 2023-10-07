const environment = require("../_helpers/environment");
const { google } = require("googleapis");

const apiKey = environment.google.apiKey;
const clientId = environment.google.clientId;

export default async function get(req, res) {
  const padron = await obtenerPadronDesdeGoogleSheets();
  res.json(padron);
}

async function obtenerPadronDesdeGoogleSheets() {
  return new Promise((resolve, reject) => {
    const sheets = google.sheets({ version: "v4", auth: apiKey });

    sheets.spreadsheets.values.get(
      {
        spreadsheetId: "1woNHryaCUxqU4s6Q1VCRUp0uDfmkugmavL00DxO9Hxo",
        range: "Sheet1!A2:B4000",
      },
      (err, res) => {
        if (err) return reject(err);
        const rows = res.data.values;
        const result = rows.map((row) => {
          return {
            legajo: row[0],
            dni: row[1],
            name: row[2],
            carrera: row[3]
          };
        });
        resolve(result);
      }
    );
  });
}
