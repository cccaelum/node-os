const os = require('os'); // importamos el modulo os

function getOSInfo() {
    const osInfo = {
        name: os.platform(),
        type: os.type(),
        version: os.version(),
        architecture: os.arch(),
        cpus: os.cpus().length, //os.cpus devuelve un array de objetos, por lo que ponemos length para que nos de el numero de cpus (nucleos)
        totalMemory: (os.totalmem() / (1024 * 1024)).toFixed(2), // pasamos de bytes a MB y redondeamos a dos decimales
        freeMemory: (os.freemem() / (1024 * 1024)).toFixed(2)
    };

    return osInfo;
}

module.exports = {
    getOSInfo
};