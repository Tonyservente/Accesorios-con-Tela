function nuevoNombre() {
    alert('Insumos de pc')

    let nombre = ""
    while (nombre === '') {
        nombre = prompt('Insumos de pc\n\nIngrese su NOMBRE o presione en cancelar para SALIR').toUpperCase();
    }
    alert(`Bienvenido ${nombre}`);

    return nombre;
}

function seleccionProducto() {
    let producto;
    do {
        producto = parseInt(prompt('Seleccione el producto que desea :\n 1) Monitor \n======\n 2) Torre \n======\n 3) Tarjeta gráfica '));

    } while (producto !== 1 && producto !== 2 && producto !== 3) {}
    switch (producto) {
        case 1:
            return 'Monitor'
        case 2:
            return 'Torre'
        case 3:
            return 'Tarjeta gráfica'
        default:
            seleccionProducto();
    }
}

function precioProducto(valor) {
    if (valor === 'Monitor') {
        return 12000;
    } else if (valor === 'Torre') {
        return 30000;
    } else if (valor === 'Tarjeta gráfica') { 
        return 9500;
    }
}

function cuenta(nombre, producto, valor) {

    alert(`Insumo de pc\n\n ${nombre} elegiste una ${producto} con valor de ${valor} pesos.`);
}

function nuevosProductos() {
    let aceptar;
    do {
        aceptar = parseInt(prompt('Insumos de pc\nNuevos productos :\n 1) Teclado gamer \n======\n 2) Mouse gamer \n======\n 3) Finalizado el pedido'));

    } while (aceptar !== 1 && aceptar !== 2 && aceptar !== 3) {}
    switch (aceptar) {
        case 1:
            return 'Teclado gamer'
        case 2:
            return 'Mouse gamer'
        case 3:
            return 'Finalizado el pedido'
        default:
            nuevosProductos()
    }
}

function precioNuevosproductos(valor2) {
    if (valor2 === 'Teclado gamer') {
        return 3000;
    } else if (valor2 === 'Mouse gamer') {
        return 1500;
    } else {
        return 0;
    }
}

function cuentaNuevosproductos(nombre, aceptar, valor2) {

alert(`Insumos de pc\n\n ${nombre} agregaste ${aceptar} con valor de ${valor2} pesos.`);

let dinero = parseInt(prompt('Insumos de pc \n\nSeleccione el monto a abonar $ :'));
if (isNaN(dinero)) {
    alert('Error!')
} else if (dinero < costo) {
    alert('Insumos de pc\n\nNo te alcanza❗');
    dinero = parseInt(prompt('Con cuanto abona $ :'));
    alert('Insumos de pc\n\n' + nombre + ' tu vuelto es ' + (dinero - (costo + costo2)) + 'pesos');
} else {
    alert('Insumos de pc\n\n' + nombre + ' tu vuelto es ' + (dinero - (costo + costo2)) + 'pesos');
}
alert('Insumo de pc\n\n MUCHAS GRACIAS POR SU PREFERENCIA!');
}


let cliente = nuevoNombre();
let producto = seleccionProducto();
let costo = precioProducto(producto);
cuenta(cliente, producto, costo);

let agregado = nuevosProductos();
let costo2 = precioNuevosproductos(agregado);
cuentaNuevosproductos(cliente, agregado, costo2);

