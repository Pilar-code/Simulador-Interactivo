//Cuenta. Sacar porcentaje de descuento

alert("Te ayudaremos a calcular el precio de tu producto con el descuento");
for (let i=0; i<100; i++){
    let Precio = prompt("Ingresa el precio de tu producto");
    let Porcentaje = prompt("Ingrese el descuento del producto");
    
    const Calculo = Precio * Porcentaje / 100;
    alert("El descuento del producto sera de " + " " + "$" + Calculo);
    if (Calculo < 0){
        alert("El numero introducido no es correcto. Intente nuevamente");
    }
    const PrecioFinal = Precio - Calculo;
    alert("El Precio final del producto sera de" +" "+"$"+PrecioFinal);
    
    break;
} 
 

//Usuario Crea Lista de productos
const ListaDeProdcutos = []
let Cantidad = 4

do{
    let incluirProductos = prompt("Ingrese lo productos que quiere inbcluir en su lista");
    ListaDeProdcutos.push(incluirProductos);
}while(ListaDeProdcutos.length != Cantidad)

alert("Estos son los productos ingresados en la lista" + "\n" + "\n" + ListaDeProdcutos.join("\n")); 


//Simulacion de Compra
class Productos {
    constructor(nombre, precio, cantidad){
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
        this.vendido = false;
    }
    vender(){
      this.vendido = true;
    }
  }
  const producto = [];
  producto.push(new Productos("Gloss", "125", "2"));
  producto.push(new Productos("MatteInstransferible", "70", "5"));
  producto.push(new Productos("MattePowder", "50", "3"));
  producto.push(new Productos("Ultrahidratante", "50", "1"));
  /* console.log(producto[2].vendido);  */
  producto[0].vender();
  producto[2].vender();
  console.log(producto[2].vendido);


