'use strict';

const fs = require('fs');
const path = require ('path');

let rawdata = fs.readFileSync(path.resolve(__dirname, 'cards.json'), 'UTF-8');
let cards = JSON.parse(rawdata);

module.exports = {
  getAll
};

async function getAll() {
  return cards;
}
