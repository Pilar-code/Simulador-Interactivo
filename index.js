alert("Te ayudaremos a calcular el precio de tu producto con el descuento")
for (let i=0; i<100; i++){
    let Precio = prompt("Ingresa el precio del producto");
    let Procentaje = prompt("Ingrese el descuento del producto"); 
    let Descuento = parseInt(Procentaje)*parseInt(Precio)/parseInt(100);
    alert("El descuento es de " + " " + Descuento);
    let MontoTotal = parseInt(Precio) - parseInt(Descuento);
    alert ("El monto final a pagar es de" + " " + MontoTotal);
    if (MontoTotal < 0){
        alert("El numero introducido no es correcto. Intente nuevamente");
    }
    break;
}