const os = require('os');

function getNetworkInfo() {
    const networkInterfaces = os.networkInterfaces(); //devuelve un objeto de interfaces de red
    const networkInfo = []; //array vacío para almacenar la información sobre cada interfaz de red

    for (const interfaceName in networkInterfaces) {
        networkInterfaces[interfaceName].forEach((iface) => { //accedemos al array de direcciones de red para la interfaz actual e iteramos sobre cada objeto (iface) del array
            networkInfo.push({
                interface: interfaceName,
                family: iface.family,
                address: iface.address,
                internal: iface.internal
            });
        });
    }

    return networkInfo; //obtenemos un array de objetos
}

module.exports = {
    getNetworkInfo
};