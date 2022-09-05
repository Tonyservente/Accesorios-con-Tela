function nuevoNombre() {
    alert('Accesorios con tela')

    let nombre = ""
    while (nombre === '') {
        nombre = prompt('Accesorios con tela\n\nIngrese su NOMBRE o presione en cancelar para SALIR').toUpperCase();
    }
    alert(`Bienvenido ${nombre}`);

    return nombre;
}

let cliente = nuevoNombre();


const productos = [
    { nombre: "Moña", precio: 150, color:["rosa", "azul", "violeta", "lila", "gris"]},
    { nombre: "Moña cherry", precio: 120, color:["negro", "violeta", "lila", "rojo"]},
    { nombre: "Vincha trenzada", precio: 220, color:["verde", "violeta", "rojo", "azul"]},
    { nombre: "Vincha Fancy", precio: 210, color:["rojo", "verde", "azul"]},
    { nombre: "Scrunchie", precio: 100, color:["verde", "violeta", "rojo", "azul"]},
    { nombre: "Scrunchie colero dream", precio: 150, color:["rosa", "azul", "violeta", "lila", "gris"]},
];

let carrito = []

let seleccion = prompt("¿Desea agregar algun producto? si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese si o no");
    seleccion = prompt("¿Desea comprar? si o no");
}

if(seleccion == "si"){
    alert(" A continuación se mostraran los productos que tenemos disponibles");
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    console.log(todoslosProductos);
    alert (todoslosProductos.join( "-"));
} else if (seleccion == "no"){
    alert ("Gracias por venir, hasta pronto!");
}

while ( seleccion != "no"){
    let pedido = prompt("Agrega un producto a tu carrito: 1) Moña  $150 2) Moña cherry $120 3) Vincha Trenzada $220 4) Vincha Fancy $210 5) Scrunchie $100 6) Scrunchie colero dream $150");
    let precio = 0;

    productoElegido= productos.find(item => item.nombre=pedido);

    
    if (productoElegido!== "undefined"){
        let colorProducto= productoElegido.color;
        let colores= colorProducto.join(" - ");
        alert(`Colores disponibles: ${colores}`);
        let  unidades = parseInt(prompt("Cuantas unidades desea agregar"));

    carrito.push({ nombreVenta: productoElegido.nombre, unidadesVenta: unidades, precioVenta: productoElegido.precio});
    console.log(carrito);
    } else {
        alert("No tenemos este producto")
    }


    seleccion = prompt("¿Desea continuar con la compra?");


    if (seleccion === "no"){
        alert("Gracias por su compra! hasta pronto");
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal}), unidades: ${carritoFinal.unidades}),
            total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert(`el total a pagar de su compra es de: ${total}`);

