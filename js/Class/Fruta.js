export class Fruta{
    constructor(id,nombre,precio,rutaImagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.rutaImagen = rutaImagen;
    }
}

export function crearProductos(){
    let arrayFrutas = [];

    arrayFrutas.push(new Fruta(1,"Arandano",5000,"../../img/arandano.jpg"));
    arrayFrutas.push(new Fruta(2,"Banana",1000,"../img/banana.jpg"));
    arrayFrutas.push(new Fruta(3,"Frambuesa",4000,"../img/frambuesa.png"));
    arrayFrutas.push(new Fruta(4,"Frutilla",3000,"../img/frutilla.jpg"));
    arrayFrutas.push(new Fruta(5,"Kiwi",2000,"../img/kiwi.jpg"));
    arrayFrutas.push(new Fruta(6,"Mandarina",800,"../img/mandarina.jpg"));
    arrayFrutas.push(new Fruta(7,"Manzana",1500,"../img/manzana.jpg"));
    arrayFrutas.push(new Fruta(8,"Naranja",9000,"../img/naranja.jpg"));
    arrayFrutas.push(new Fruta(9,"Pera",2500,"../img/pera.jpg"));
    arrayFrutas.push(new Fruta(10,"Anana",3000,"../img/anana.jpg"));
    arrayFrutas.push(new Fruta(11,"Pomelo-amarillo",2000,"../img/pomelo-amarillo.jpg"));
    arrayFrutas.push(new Fruta(12,"Pomelo-rojo",2000,"../img/pomelo-rojo.jpg"));
    arrayFrutas.push(new Fruta(13,"Sandia",4600,"../img/sandia.jpg"));

    return arrayFrutas;
}

export function imprimirProductos($referencia,arrayFrutas){
    arrayFrutas.forEach(fruta => {
        //Creo las etiquetas por cada producto dentro del array
        const $div = document.createElement("div");
        $div.classList.add("card-producto");
        const $imagenProdcuto = document.createElement("img");
        const $nombreProducto = document.createElement("h3");
        const $precioProducto = document.createElement("p");
        const $botonAgregarCarrito = document.createElement("button");

        //Asigno la ruta a cada elemento de imagen con su texto alternativo
        $imagenProdcuto.setAttribute("src",fruta.rutaImagen);
        $imagenProdcuto.setAttribute("alt",`Imagen de un/una ${fruta.nombre}`);
        $nombreProducto.classList.add("nombre-producto");
        $precioProducto.classList.add("precio-producto");
        $nombreProducto.innerText=`${fruta.nombre}`;
        $precioProducto.innerText=`$${fruta.precio}`;
        $botonAgregarCarrito.innerText = "Agregar al carrito";
        $botonAgregarCarrito.classList.add("btn-agregar-al-Carrito");

        //Cuelgo todo al elemento del dom
        $div.appendChild($imagenProdcuto);
        $div.appendChild($nombreProducto);
        $div.appendChild($precioProducto);
        $div.appendChild($botonAgregarCarrito);
        $referencia.appendChild($div);
    });
}

export function filtrarProducto(texto,arrayFrutas){
    const $filtrado = arrayFrutas.filter((fruta)=>{
        return fruta.nombre.toLowerCase().includes(texto.toLowerCase());
    });
    return $filtrado;
}