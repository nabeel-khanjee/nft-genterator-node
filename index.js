const myArgs = process.argv.slice(2);
import { buildSetup, createFiles, createMetaData } from "./src/main.js";
import { defaultEdition } from"./src/config.js";
const edition = myArgs.length > 0 ? Number(myArgs[0]) : defaultEdition;

(() => {
  buildSetup();
  createFiles(edition);
  createMetaData();
})();

