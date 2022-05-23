(function(){
    function $(Selector){
        return document.querySelector(Selector);
    }
    function Carrito(){
    this.productos = [{id:'001', nombre:'Labial1', precio:800, imagen:'Labial1.jpg'}, 
                      {id:'002', nombre:'Labial2', precio:500, imagen:'Labial2.jpg'}, 
                      {id:'003', nombre:'Labial3', precio:600, imagen:'Labial3.jpg'}, 
                      {id:'003', nombre:'Labial4', precio:700, imagen:'Labial4.jpg'}, 
                      {id:'101', nombre:'Sombra1', precio:1000, imagen:'Sombras1.jpg'}, 
                      {id:'102', nombre:'Sombra2', precio:1500, imagen:'Sombras2.jpg'}, 
                      {id:'103', nombre:'Sombra3', precio:2300, imagen:'Sombras3.jpg'}, 
                      {id:'104', nombre:'Sombra4', precio:1600, imagen:'Sombras4.jpg'}, 
                    ]
    this.constructor = function(){
        if(!localStorage.getItem("carrito")){
            localStorage.setItem('carrito','[]');
        }
    this.getCarrito = JSON.parse(localStorage.getItem("carrito"));
    
    this.agregarId = function(item){
        for(i of this.productos){
            if([i].id === item){
                var registro = i;
            }
        }
        if(!registro){
            return;
        }
        //console.log(registro);

        for(i of this.getCarrito){
            if(i.id === item){
               i.cantidad++;
               console.log(this.getCarrito); 
               localStorage.setItem("carrito",JSON.stringify(this.getCarrito));
               return;
            }
        }
        registro.cantidad = 1;
        this.getCarrito.push(registro);
        console.log(this.getCarrito);
        localStorage.setItem("carrito",JSON.stringify(this.getCarrito));   
      }
     }
    }

    function carritoVista() {
        this.renderCatalogo = function(){
            var productoHtml = ``;
        for (var i in carrito.productos){
            productoHtml += `
            <div class="RecuadroImagenes">
                <img class="imgProductos" src="./image/${carrito.productos[i].imagen}" alt="Placeholder">
                <p>${carrito.productos[i].nombre}</p>
                <h3>$${carrito.productos[i].precio}</h3>
               <a href="#" class="card-footer-item" id="btnCarrito" data-Producto="${[i].id}">Agregar al Carrito</a>
            </div>
            `;
        }
        $(".Padre1").innerHTML = productoHtml;
        }
    }
    var carrito = new Carrito();
    var carritoVista = new carritoVista();

    document.addEventListener('DOMContentLoaded',function(){
        /* console.log(carrito); */
        carrito.constructor();
        carritoVista.renderCatalogo();
        console.log(carrito.getCarrito);
    });

    $("#Padre1").addEventListener('click', function(ev){
        ev.preventDefault();
        if(ev.target.id === "btnCarrito"){
            var id = ev.target.dataset.Producto;
            carrito.agregarId(id);
        }
    })
})();


















































/*

añadircarrito.addEventListener('click', (e)=>{
    e.
})


 const btnCarrito = document.querySelectorAll(".btnPorcentaje");
btnCarrito.forEach(btn =>{
    btn.addEventListener('Click',addToCarrito)
})

function addToCarrito(e){
    const button = e.target
    console.log(button);
} */


//Boton. Sacar porcentaje de descuento
/*const btn = document.querySelectorAll(".btnPorcentaje");

const Porcentaje = ()=>{
    alert("Te ayudaremos a calcular el precio de tu producto con el descuento");
    let Precio = prompt("Ingresa el precio de tu producto");
    let Porcentaje = prompt("Ingrese el descuento del producto");
    
    const Calculo = Precio * Porcentaje / 100;
    alert("El descuento del producto sera de " + " " + "$" + Calculo);
    if (Calculo < 0){
        alert("El numero introducido no es correcto. Intente nuevamente");
    }
    const PrecioFinal = Precio - Calculo;
    alert("El Precio final del producto sera de" +" "+"$"+PrecioFinal);
}

btn.addEventListener('click', Porcentaje())

Porcentaje(); */
