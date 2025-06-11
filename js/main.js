import {Alumno,imprimirDatosAlumno} from "./Class/Alumno.js";
import {Fruta,crearProductos,imprimirProductos,filtrarProducto} from "./Class/Fruta.js";


/*PINCHE EN AGREGAR AL CARRITO, LO ENVIO DE TODAS FORMAS PORQUE SIENTO QUE CON LA PRIMER PARTE VENGO BIEN, SOLO NECESITO AJUSTAR UN POCO MAS CON PRACTICA, ASI QUE ESPERO
SABER SI POR LO MENOS HASTA DONDE LO TENGO VIENE BIEN*/

const arrayFrutas = crearProductos();
init();

const $inputText = document.querySelector(".barra-busqueda");
$inputText.addEventListener("input",()=>{
    const $divCardProducto = document.querySelector(".contenedor-productos");
    let texto = $inputText.value.toLowerCase();
    let productoFiltrado = filtrarProducto(texto,arrayFrutas);
    
    while($divCardProducto.firstChild){
        $divCardProducto.removeChild($divCardProducto.firstChild);
    }
    imprimirProductos($divCardProducto,productoFiltrado);
});




 function mostrarCarrito($referencia,arrayProductos){
    if(arrayProductos.lenght>0){
        arrayProductos.forEach(producto => {
    
            const li = document.createElement("li");
            li.classList.add("bloque-item");
            const nombreProducto = document.createElement("p");
            nombreProducto.classList.add("nombre-item");
            const botonEliminarCarrito = document.createElement("button");
    
            $nombreProducto.innerText=`${producto.nombre} - $${producto.precio}`;
            botonEliminarCarrito.innerText = "Eliminar";
    
            li.appendChild(nombreProducto);
            li.appendChild(botonEliminarCarrito);
            $referencia.appendChild(li);
        });
    }

}

 function agregarAlCarrito(e,arrayFrutas){

    /*ACA ES DONDE NO ME CONCUERDA LA LOGICA VISTA EN CLASE CON LA FORMA EN LA QUE VENGO ARMANDO EL PARCIAL*/
    const elementoClickeado = e.target;
    const contenedor = elementoClickeado.parentNode;
    const arrayElementosdelContenedor = contenedor.childNodes;

    const elementoNombre = contenedor.querySelector(".nombre-producto");


    const [id,nombre,precio,ruta] = filtrarProducto(elementoNombre,arrayFrutas);

    console.log(id,nombre,precio,ruta);

    let yaExiste = false;

    let carrito = obtenerCarrito();
    if(carrito){
        for (const producto of carrito) {
            if(producto.nombre == elementoNombre){
                const inputNumber = document.createElement("input");
                inputNumber.type = "number";
                contenedor.appendChild(inputNumber);
            }
        }

    }else{
        
        carrito = [];
    }

    carrito.push(new Fruta(Math.floor(Math.random()),nombreDelProducto,precioDelProducto,rutaDeLaImagenDelProducto));
    guardarCarrito(carrito);
    alert("Elemento agregado");
}

function obtenerCarrito(){
    return JSON.parse(localStorage.getItem("carrito")); 
}

function guardarCarrito(carrito){

    localStorage.setItem("carrito",JSON.stringify(carrito));
}



window.addEventListener("DOMContentLoaded",()=>{
    const $btnAgregar = document.querySelectorAll(".btn-agregar-al-Carrito");
    $btnAgregar.forEach(btn => {
        btn.addEventListener("click",agregarAlCarrito);
    });
});


function init(){

    const alumno = new Alumno(41026881,"Ivan Nahuel","Ghigliotti")
    imprimirDatosAlumno(document.querySelector(".nombreAlumno"),alumno);

    imprimirProductos(document.querySelector(".contenedor-productos"),arrayFrutas);
}