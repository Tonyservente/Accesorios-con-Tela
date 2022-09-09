function container() {
  
    const productos = [{
        id: 1,
        nombre: 'Moña',
        precio: 150,
        cantidad: 300
      },
      {
        id: 2,
        nombre: 'Moña cherry',
        precio: 120,
        cantidad: 20
      },
      {
        id: 3,
        nombre: 'Vincha trenzada',
        precio: 220,
        cantidad: 30
      },
      {
        id: 4,
        nombre: 'Vincha Fancy',
        precio: 210,
        cantidad: 15
      },
      {
        id: 5,
        nombre: 'Scrunchie',
        precio: 100,
        cantidad: 50
      },
      {
        id: 6,
        nombre: 'Scrunchie colero dream',
        precio: 150,
        cantidad: 10
      },
    ];
    
     class Productos {
        constructor(id, nombre, precio, cantidad){  
          this.id = id;
          this.nombre = nombre;
          this.precio = precio;
          this.cantidad = cantidad;
        }
      }
    
      const carritoComprar = [];
      let validarObj;
      let arraydeProductos = [];
    
      function validacion(nombre) {
        let nuevaEntrada = prompt(nombre);
        while (nuevaEntrada == '' || nuevaEntrada == null) {
          alert('Error! - No se ingresaron datos');
          nuevaEntrada = prompt(nombre);
        }
        return validarObj = nuevaEntrada;
      }
    
      function menu() {
        validacion(opciones);
        parseInt(validarObj);
        switch (validarObj) {
          case "1":
            menuLista();
            break;
          case "2":
            salir(false);
            break;
          default:
            alert("Error en el dato");
            menu();
            break;
        }
      }
    
      function menuLista() {
        let mostrarProductos = '';
        let a = 1;
        productos.forEach((i) => {
          mostrarProductos += (`${i.id} - ${i.nombre} \n        precio = ${i.precio} Pesos. ~ disponible ${i.cantidad} unidades.\n`);
          a++;
        });
        let menuProductos = (`Agregue al carrito el producto deseado :\n\n${mostrarProductos}${a} - Ir al pago -->\n${a + 1} - Vaciar carrito <--`);
        menuListaProd(menuProductos, a);
      }
    

    
      function menuListaProd(menuProductos, a) {
        validacion(menuProductos);
        if (validarObj == a) {
          if (carritoComprar.length == 0) {
            alert('carrito Vacío');
            menuLista();
          } else {
            mostrandoPedidos();
          }
        } else if (validarObj == a + 1) {
          alert('Vaciando Carrito!');
          let consulta = parseInt(prompt('Con tela joyeria\n\n ¿Desea continuar? :\n\n1 - menú\n2 - salir'));
          while (consulta != 500 ) {
            if (consulta == 1) {
              menu();
              break;
            } else if (consulta == 2) {
              salir(false);
              break;
            } else {
              alert("Error en el dato");
              consulta = parseInt(prompt('Con tela joyeria\n\n ¿Desea continuar? :\n\n1 - menú\n2 - salir'));
            }
          }
        } else if (validarObj > 0 && validarObj < productos.length + 1) {
          arryFiltroProducto();
        } else {
          alert('Error! - ingresa otra opción');
          menuLista();
        }
      }
     
       function arryFiltroProducto() {
        let cantidad = 1;
        productos.map((productos) => {
          if (productos.id == validarObj) {
            arraydeProductos = {
              id: productos.id,
              titulo: productos.titulo,
              precio: productos.precio,
              cantidad: productos.cantidad,
            };
            return arraydeProductos;
          }
        });
        agregandoalCarrito(arraydeProductos);
      }
    
      function agregandoalCarrito(arraydeProductos) {
        const acumulado = carritoComprar.some((elemento) => elemento.id == validarObj);
        if (acumulado == false) {
          const nuevoCarrito = new Productos(arraydeProductos);
          carritoComprar.push(nuevoCarrito);
          alert(`Con tela joyeria // CARRITO :\n\nAgregaste -- > ${arraydeProductos.nombre}`);
        }
        else {
          carritoComprar.filter((elemento) => {
            if (elemento.id == validarObj) {
              elemento.cantidad++
            }
          });
          alert(`Con tela joyeria // CARRITO :\n\nAgregaste --> ${arraydeProductos.nombre}`);
        }
        menuLista();
      }
    
      function mostrandoPedidos() {
        let mostrarCarrito = "";
        let subTotal = 0;
        total = 0;
        carritoComprar.forEach((i) => {
          subTotal = i.precio * i.cantidad;
          total += subTotal;
          mostrarCarrito += (`${i.nombre} / valor : ${i.precio} Pesos. / unds : ${i.cantidad}\ncosto x Productos ${subTotal} Pesos.\n\n`);
        });
        alert(`Con tela joyeria // CARRITO :\n\n${mostrarCarrito}\nTotal a Pagar ${total} Pesos.`);
        cobrar();
      }  
    
      function cobrar() {
        validacion(cash);
        parseInt(validarObj);
        switch (validarObj >= total) {
          case true:
            alert(`Con tela joyeria \n\nTu vuelto es ${validarObj - total} Pesos.`);
            salir(true);
            break;
          case false:
            alert(`Con tela joyeria \n\n'Error!' Monto insuficiente`);
            cobrar();
            break;
          default:
            alert('Error! - ingresa otra opción');
            cobrar();
            break;
        }
      }
    
      function salir(mensaje) {
        if (mensaje == false) {
          alert('Con tela joyeria \n\nGracias Por tu Visita. Te Esperamos Pronto!');
          return;
        } else {
          alert('Con tela joyeria\n\nPuedes retirar tu pedido en Despacho!');
          alert('Con tela joyeria\n\nGracias Por tu Compra, te Esperamos Pronto');
          return;
        }
      }
    
       let nombre = 'Con tela joyeria\n\nIngrese su nombre :';
       let opciones = 'Con tela joyeria\n\nIngrese una opcion: \n\n1 - Comprar productos\n2 - Salir';
       let cash = 'Con tela joyeria\n\n Ingrese efectivo :';
       validacion(nombre);
       alert('Con tela joyeria\n\nBienvenido(a)  ' + validarObj.toUpperCase());
       menu();
    
    }