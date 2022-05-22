import fse from 'fs-extra';
import { getIdentitiesFromSeed } from './lib';

const seed = fse.readFileSync('seed.txt').toString();
const idents = getIdentitiesFromSeed(seed, 10);
const rootId = idents[0].getPrincipal().toText();
const dir = `plug_${rootId.substring(0, 11)}`;

console.log("root account (seed.txt): ", rootId, "\n");

idents.map((ident, i) => {
    const principal = ident.getPrincipal().toText();
    fse.outputFileSync(`${dir}/${i}_${principal.substring(0, 11)}.pem`, ident.getPem());
    console.log("exporting pem for user (", i, "): ", principal);
});