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
        for(id of this.productos){
            if([i].id === item){
                var registro = i;
            }
        }
        if(!registro){
            return
        }
        console.log(registro);

        for(id of this.getCarrito){
            if([i].id === item){
               i.cantidad++;
               console.log(this.getCarrito); 
               localStorage.setItem("carrito",JSON.stringify(this.getCarrito));
               return;
            }
        }
        registro.cantidad = 1;
        this.getCarrito.push(registro);
        console.log(this.constructor);
        localStorage.setItem("carrito",JSON.stringify(this.getCarrito));
      }
     }
     this.getTotal = function(){
        var total = 0;
        for(i of this.getCarrito){
            total += parseFloat(i.cantidad) * parseFloat(i.precio);
        }
        return total;
     }
    }

    function carritoVista() {
        this.mostrarCatalogo= function(){
            var productoHtml = ``;
        for (var i in carrito.productos){
            productoHtml += `
            <div class="RecuadroImagenes">
                <img class="imgProductos" src="./image/${carrito.productos[i].imagen}" alt="Placeholder">
                <p>${carrito.productos[i].nombre}</p>
                <h3>$${carrito.productos[i].precio}</h3>
                <a href="#" id="btnCarrito" data-Producto="${carrito.productos[i].id}">Agregar al Carrito</a>
            </div>
            `;
        }
        $(".boxProductos").innerHTML = productoHtml;
        }
        this.mostrarCarrito = function (){
           var carritoHtml = ``;
            for (i of carritoVista.getcarrito){
                carritoHtml += `
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                  <th scope="col">quitar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td><img src="./img/${getCarrito.i.imagen}" alt="">${getcarrito.i.nombre}</td>
                  <td>${getcarrito.i.precio}</td>
                  <td>${getCarrito.i.cantidad}</td>
                  <td>${getTotal.i.total}</td>
                </tr>
              </tbody>
                `;
            }
            }
            $("#pestañaCarrito").addEventListener('click',function(){
                alertify.alert().set('message', 'Tu Carrito'+ ' ' + carritoVista.mostrarCarrito.carritoHtml).show();
            });
          //$("#pestañaCarrito").innerHTML = carritoHtml;   
    }
    var carrito = new Carrito();
    var carritoVista = new carritoVista();

    document.addEventListener('DOMContentLoaded',function(){
        carritoVista.mostrarCatalogo();
        //carritoVista.mostrarCarrito(); 
        carrito.constructor();
        console.log(carrito.getcarrito);
        console.log(carrito.getTotal());
    });

    $("#boxProductos").addEventListener('click', function(ev){
        ev.preventDefault();
        if(ev.target.id === "btnCarrito"){
            var id = ev.target.dataset.Producto;
            carrito.agregarId(id);
        }
    })

})();
