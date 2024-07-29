//importamos los modulos
const osModule = require('./osModule');
const networkModule = require('./networkModule');

function printOSInfo() {
    const osInfo = osModule.getOSInfo(); //llamamos a la funcion desde su modulo
    console.log('Nombre:', osInfo.name);
    console.log('Tipo:', osInfo.type);
    console.log('Versión:', osInfo.version);
    console.log('Arquitectura:', osInfo.architecture);
    console.log('CPUs:', osInfo.cpus);
    console.log('Memoria Total:', osInfo.totalMemory, 'MB');
    console.log('Memoria Libre:', osInfo.freeMemory, 'MB');
}

function printNetworkInfo() {
    const networkInfo = networkModule.getNetworkInfo();
    networkInfo.forEach(info => {
        console.log(`Interfaz ${info.interface}:`);
        console.log(`  Familia: ${info.family}`);
        console.log(`  Dirección: ${info.address}`);
        console.log(`  Interno: ${info.internal}`);
    });
}

printOSInfo();
console.log('');
printNetworkInfo();