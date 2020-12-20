const fs = require('fs');
const colors = require('colors');
const { basename } = require('path');

let listarTabla = (base, limite = 10) => {

    console.log('========================'.green);
    console.log(`   Tabla de ${base}`.green);
    console.log('========================'.green);

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);

    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El balor introdicido no es un número');
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;

        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });

};

module.exports = {
    crearArchivo,
    listarTabla
}