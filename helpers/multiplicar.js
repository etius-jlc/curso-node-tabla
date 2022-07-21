const fs = require('fs');
const color = require('colors');

const crearArchivo = async(base, listar, hasta) => {
    let salida, consola = '';
    for (let i = 1; i <= hasta; i++) {
        salida += `${ base} x ${ i} = ${base * i}\n`;
        consola += `${ (base.toString()).red} ${ 'x'.green} ${ i} = ${base * i}\n`;
    }

    if (listar) {

        console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla - ${ base}.txt`, salida);
    return `tabla-${ base}.txt`;
}
module.exports = {

    crearArchivo
}