// Script per importare i dati dal CSV olimpiadi_fino_2016.csv in PocketBase (versione ES module)
// Assicurati di aver installato le dipendenze: npm install pocketbase csv-parse

import fs from 'fs';
import { parse } from 'csv-parse';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090'); // Cambia se il server PocketBase è altrove

async function importCSV() {
    // Autenticazione admin (sostituisci con le tue credenziali)
    await pb.admins.authWithPassword('spotdan48@gmail.com', 'RomoloPuzza100');

    const records = [];
    const parser = fs.createReadStream('./public/olimpiadi_fino_2016.csv')
        .pipe(parse({ columns: true, trim: true }));

    for await (const row of parser) {
        records.push(row);
    }

    for (const record of records) {
        await pb.collection('olimpiadi').create({
            anno: record.Anno,
            citta: record.Città,
            paese: record.Paese,
            latitudine: parseFloat(record.Latitudine),
            longitudine: parseFloat(record.Longitudine),
            tipo: record.Tipo
        });
        console.log(`Inserito: ${record.Anno} - ${record.Città}`);
    }
    console.log('Importazione completata!');
}

importCSV().catch(console.error);
