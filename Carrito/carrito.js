let Carrito = [];

function agregarAlCarrito(nombre, apellido, precio) {
    const productoExistente = Carrito.find(producto => producto.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        Carrito.push({ nombre: nombre, apellido: apellido, precio: precio, cantidad: 1 });
    }

    mostrarCarrito();
}

function eliminarDelCarrito(nombre) {
    Carrito = Carrito.filter(producto => producto.nombre !== nombre);
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoDiv = document.getElementById("carrito");
    carritoDiv.innerHTML = ''; 

    Carrito.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <p>${producto.nombre} (Cantidad: ${producto.cantidad}) - $${producto.precio * producto.cantidad}</p>
            <button onclick="eliminarDelCarrito('${producto.nombre}')" class="bg-red-200">Eliminar</button>
        `;
        carritoDiv.appendChild(productoDiv);
    });

    actualizarTotal();
}

function actualizarTotal() {
    let total = 0;
    Carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    document.getElementById("total").innerText = total;
}

function toggleCarrito() {
    const CarritoMenu = document.getElementById("carritoMenu");
    
    if (CarritoMenu.style.display === "none" || CarritoMenu.style.display === "") {
        CarritoMenu.style.display = "block";
    } else {
        CarritoMenu.style.display = "none";
    }
}
