function mostrarSeleccion() {


    let tipoProducto = document.getElementById("producto").value;

    let cantidad = document.getElementById("cantidad").value;
    cantidad = parseFloat(cantidad);

    if (!isNaN(cantidad) && cantidad > 0) {
        const mensaje = `Has elegido ${cantidad} ${tipoProducto}(s).`;
        alert(mensaje);
    } else {
        alert("Por favor, ingresa una cantidad válida mayor que cero.");
    }

}