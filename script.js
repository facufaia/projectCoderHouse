class Productos {
    constructor(imagen, id, marca, precio, categoria){
        this.imagen = imagen;
        this.id = id;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
    }
}
class Tvs extends Productos {
    constructor(imagen, id, marca, precio, categoria, display, pulgadas, resolucion){
        super(imagen,id,marca,precio,categoria);
        this.display = display;
        this.pulgadas = parseInt(pulgadas);
        this.resolucion = resolucion;
    }
    mostrarTitulo(){
        return `${this.categoria} ${this.marca} - ${this.display} ${this.resolucion} ${this.pulgadas}"`
    }
}
class Mouses extends Productos {
    constructor(imagen, id, marca, precio, categoria, nombre, dpi, wireless){
        super(imagen,id,marca,precio,categoria);
        this.nombre = nombre;
        this.dpi = parseInt(dpi);
        this.wireless = wireless;
    }
    mostrarTitulo(){
        if (this.wireless == true){
            this.wireless = "WIRELESS";
            return `${this.categoria} ${this.marca} ${this.nombre} - ${this.dpi} DPI ${this.wireless}`
        }
        else{
        return `${this.categoria} ${this.marca} ${this.nombre} - ${this.dpi} DPI`
        }
    }
}
class Parlantes extends Productos {
    constructor (imagen, id, marca, precio, categoria, nombre, conector, potencia){
        super(imagen,id,marca,precio,categoria);
        this.nombre = nombre;
        this.conector = conector;
        this.potencia = potencia;
    }
    mostrarTitulo(){
        return `${this.categoria} ${this.marca} ${this.nombre} - ${this.conector} ${this.potencia}`
    }
}
class Teclados extends Productos {
    constructor (imagen, id, marca, precio, categoria, nombre, switches, wireless){
        super(imagen,id,marca,precio,categoria);
        this.nombre = nombre;
        this.switches = switches;
        this.wireless = wireless;
    }
    mostrarTitulo(){
        if (this.wireless == true){
            this.wireless = "WIRELESS";
            return `${this.categoria} ${this.marca} ${this.nombre} - ${this.switches} ${this.wireless}`
        }
        else{
        return `${this.categoria} ${this.marca} ${this.nombre} - ${this.switches}`
        }
        // this.wireless == true ? return `${this.categoria} ${this.marca} ${this.nombre} - ${this.switches} Wireless`
    }
}
const productos = [
    new Tvs ("https://http2.mlstatic.com/D_NQ_NP_720674-MLA52029248980_102022-O.webp", 1, "Samsung", 500000, "Smart TV", "QLED", 43, "4K"),
    new Tvs ("https://http2.mlstatic.com/D_NQ_NP_689494-MLA51838855315_102022-O.webp", 2, "BGH", 120000, "Smart TV", "LCD", 50, "2K"),
    new Tvs ("https://http2.mlstatic.com/D_NQ_NP_808322-MLA52162460389_102022-O.webp", 3, "Philco", 80000, "Smart TV", "OLED", 40, "Full HD"),
    new Tvs ("https://http2.mlstatic.com/D_NQ_NP_660116-MLA52216049488_102022-O.webp", 4, "LG", 60000, "Smart TV", "LED", 32, "HD"),
    new Parlantes ("https://http2.mlstatic.com/D_NQ_NP_869763-MLA50495066082_062022-O.webp", 100, "JBL", 36000, "Parlante", "Flip 6", "USB-C", "20W"),
    new Parlantes ("https://http2.mlstatic.com/D_NQ_NP_957744-MLA50400740811_062022-O.webp", 101, "JBL", 17390, "Parlante", "Clip 4", "USB-C", "5W"),
    new Parlantes ("https://http2.mlstatic.com/D_NQ_NP_640537-MLA45157713114_032021-O.webp", 102, "Xiaomi", 14000, "Parlante", "MI", "Auxiliar | USB-C", "16W"),
    new Parlantes ("https://http2.mlstatic.com/D_NQ_NP_754237-MLA44715287415_012021-O.webp", 103, "JBL", 9870, "Parlante", "GO 3", "USB", "4.2W"),
    new Teclados ("https://http2.mlstatic.com/D_NQ_NP_757719-MLA52349939112_112022-O.webp", 200, "Logitech", 26000, "Teclado", "Pro X", "Cherry MX Brown", true),
    new Teclados ("https://http2.mlstatic.com/D_NQ_NP_741180-MLA51631455572_092022-O.webp", 201, "Hyper X", 23000, "Teclado", "Alloy elite", "Cherry MX Red", false),
    new Teclados ("https://http2.mlstatic.com/D_NQ_NP_944516-MLA50059145076_052022-O.webp", 202, "Red Dragon", 11000, "Teclado", "Fizz Pro K616", "OUTEMU Red", true),
    new Teclados ("https://http2.mlstatic.com/D_NQ_NP_817802-MLA52350652821_112022-O.webp", 203, "Red Dragon", 10000, "Teclado", "Kumara K552", "OUTEMU Blue", false),
    new Mouses ("https://http2.mlstatic.com/D_NQ_NP_824234-MLA45293283963_032021-O.webp", 300, "Logitech", 15000, "Mouse", "Master Series MX Anywhere 3", 4000, true),
    new Mouses ("https://http2.mlstatic.com/D_NQ_NP_977588-MLA51172463642_082022-O.webp", 301, "Logitech", 7750, "Mouse", "G Series Lightspeed G305", 12000, true),
    new Mouses ("https://http2.mlstatic.com/D_NQ_NP_706475-MLA31606024503_072019-O.webp", 302, "Hyper X", 2700, "Mouse", "Pulsefire Core", 6200, false),
    new Mouses ("https://http2.mlstatic.com/D_NQ_NP_967693-MLA43631701326_092020-O.webp", 303, "Kougar", 1478, "Mouse", "Minos X2", 3000, false)
]


function crearCards(array,container){
    container.innerHTML = "";
    array.forEach(i => {
        card = document.createElement("div");
        card.className = "card";
        card.id = `${i.id}`;
        card.innerHTML =`
            <h4 class = "card__titulo card__font card__padding">${i.mostrarTitulo()}</h4>
            <img class = "card__img" src = "${i.imagen}">
            <span class = "card__precio card__font">$${i.precio}</span>
            <button class = "boton">Añadir al carrito</button>`;
        container.appendChild(card);
    });
}
function aggCarrito(array,container){
    container.innerHTML = "";
    array.forEach(i => {
        card = document.createElement("div");
        card.className = "card";
        card.id = `${i.id}`;
        card.innerHTML =`
            <h4 class = "card__titulo card__font card__padding">${i.mostrarTitulo()}</h4>
            <img class = "card__img" src = "${i.imagen}">
            <span class = "card__precio card__font">$${i.precio}</span>`;
        container.appendChild(card);
    });
}





const sectionCards = document.querySelector("#container");
crearCards(productos,sectionCards);
const selectFiltro = document.querySelector("#selectFiltro"), 
selectCategoria = document.querySelector("#selectCategoria"),
botonCarrito = document.querySelectorAll(".boton"),
sectionCarrito = document.querySelector("#container1__carrito"),
carrito = [],
cart = JSON.parse(localStorage.getItem('cart')),
containerSelectionCarrito = document.querySelector("#container1"),
containerTotal = document.querySelector(".container__total");




selectFiltro.addEventListener('change',()=>{
    // (selectFiltro == "1") ? crearCards(productos.sort((a,b)=>{return a.precio-b.precio}),sectionCards):crearCards(productos.sort((a,b)=>{return b.precio-a.precio}),sectionCards)
    if (selectFiltro.value == "1"){
        crearCards(productos.sort((a,b)=>{return a.precio-b.precio}),sectionCards);
    }
    else{
        crearCards(productos.sort((a,b)=>{return b.precio-a.precio}),sectionCards);
    }
});
selectCategoria.addEventListener('change',()=>{
    crearCards(productos.filter(objeto => objeto.categoria == selectCategoria.value),sectionCards);
});

botonCarrito.forEach(boton => {
    boton.addEventListener('click', (x)=>{
        carrito.push(productos.find(element => element.id == boton.parentElement.id));
        localStorage.setItem('cart',JSON.stringify(carrito));
        aggCarrito(carrito, sectionCarrito);
    })
});

Toastify({
    text: "CARRITO",
    duration: 0,
    gravity: "bottom",
    position: "right", 
    stopOnFocus: true, 
    style: {
      opacity: ".93",
      background: "linear-gradient(to top, #00b09b, #96c93d)",
    },
    onClick: function(){
        let total = 0;
        if (containerSelectionCarrito.classList == "unshow"){
            containerSelectionCarrito.classList = "show";
            sectionCards.classList = "left";
        }
        else if (containerSelectionCarrito.classList == "show"){
            containerSelectionCarrito.classList = "unshow";
            sectionCards.classList = "";
        }
        carrito.forEach(element => {
            total += element.precio;
        })
        containerTotal.innerHTML = "";
        containerTotal.innerHTML =`<h4 class = "total">TOTAL: $${total}</h4>`;
    }
}).showToast();