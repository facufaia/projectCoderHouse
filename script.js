class Productos {
    constructor(cantidad,imagen, id, marca, precio, categoria){
        this.cantidad = cantidad;
        this.imagen = imagen;
        this.id = id;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
    }
}
class Tvs extends Productos {
    constructor(cantidad, imagen, id, marca, precio, categoria, display, pulgadas, resolucion){
        super(cantidad,imagen,id,marca,precio,categoria);
        this.display = display;
        this.pulgadas = parseInt(pulgadas);
        this.resolucion = resolucion;
        this.titulo = `${this.categoria} ${this.marca} - ${this.display} ${this.resolucion} ${this.pulgadas}"`;
    }
}
class Mouses extends Productos {
    constructor(cantidad, imagen, id, marca, precio, categoria, nombre, dpi, wireless){
        super(cantidad,imagen,id,marca,precio,categoria);
        this.nombre = nombre;
        this.dpi = parseInt(dpi);
        this.wireless = wireless;
        if (this.wireless == true) {
            this.wireless = "Wireless";
            this.titulo = `${this.categoria} ${this.marca} ${this.nombre} - ${this.dpi} DPI ${this.wireless}`;
        }
        else{
            this.titulo = `${this.categoria} ${this.marca} ${this.nombre} - ${this.dpi} DPI`;
        }
    }
}
class Parlantes extends Productos {
    constructor (cantidad, imagen, id, marca, precio, categoria, nombre, conector, potencia){
        super(cantidad,imagen,id,marca,precio,categoria);
        this.nombre = nombre;
        this.conector = conector;
        this.potencia = potencia;
        this.titulo = `${this.categoria} ${this.marca} ${this.nombre} - ${this.conector} ${this.potencia}`;
    }
}
class Teclados extends Productos {
    constructor (cantidad, imagen, id, marca, precio, categoria, nombre, switches, wireless){
        super(cantidad,imagen,id,marca,precio,categoria);
        this.nombre = nombre;
        this.switches = switches;
        this.wireless = wireless;
        if (this.wireless == true){
            this.wireless = "Wireless";
            this.titulo = `${this.categoria} ${this.marca} ${this.nombre} - ${this.switches} ${this.wireless}`;
        }
        else{
            this.titulo = `${this.categoria} ${this.marca} ${this.nombre} - ${this.switches}`;
        }
    }
}
const productos = [
    new Tvs (0, "https://http2.mlstatic.com/D_NQ_NP_720674-MLA52029248980_102022-O.webp", 1, "Samsung", 500000, "Smart TV", "QLED", 43, "4K"),
    new Tvs (0, "https://http2.mlstatic.com/D_NQ_NP_689494-MLA51838855315_102022-O.webp", 2, "BGH", 120000, "Smart TV", "LCD", 50, "2K"),
    new Tvs (0, "https://http2.mlstatic.com/D_NQ_NP_808322-MLA52162460389_102022-O.webp", 3, "Philco", 80000, "Smart TV", "OLED", 40, "Full HD"),
    new Tvs (0, "https://http2.mlstatic.com/D_NQ_NP_660116-MLA52216049488_102022-O.webp", 4, "LG", 60000, "Smart TV", "LED", 32, "HD"),
    new Parlantes (0, "https://http2.mlstatic.com/D_NQ_NP_869763-MLA50495066082_062022-O.webp", 100, "JBL", 36000, "Parlante", "Flip 6", "USB-C", "20W"),
    new Parlantes (0, "https://http2.mlstatic.com/D_NQ_NP_957744-MLA50400740811_062022-O.webp", 101, "JBL", 17390, "Parlante", "Clip 4", "USB-C", "5W"),
    new Parlantes (0, "https://http2.mlstatic.com/D_NQ_NP_640537-MLA45157713114_032021-O.webp", 102, "Xiaomi", 14000, "Parlante", "MI", "Auxiliar | USB-C", "16W"),
    new Parlantes (0, "https://http2.mlstatic.com/D_NQ_NP_754237-MLA44715287415_012021-O.webp", 103, "JBL", 9870, "Parlante", "GO 3", "USB", "4.2W"),
    new Teclados (0, "https://http2.mlstatic.com/D_NQ_NP_757719-MLA52349939112_112022-O.webp", 200, "Logitech", 26000, "Teclado", "Pro X", "Cherry MX Brown", true),
    new Teclados (0, "https://http2.mlstatic.com/D_NQ_NP_741180-MLA51631455572_092022-O.webp", 201, "Hyper X", 23000, "Teclado", "Alloy elite", "Cherry MX Red", false),
    new Teclados (0, "https://http2.mlstatic.com/D_NQ_NP_944516-MLA50059145076_052022-O.webp", 202, "Red Dragon", 11000, "Teclado", "Fizz Pro K616", "OUTEMU Red", true),
    new Teclados (0, "https://http2.mlstatic.com/D_NQ_NP_817802-MLA52350652821_112022-O.webp", 203, "Red Dragon", 10000, "Teclado", "Kumara K552", "OUTEMU Blue", false),
    new Mouses (0, "https://http2.mlstatic.com/D_NQ_NP_824234-MLA45293283963_032021-O.webp", 300, "Logitech", 15000, "Mouse", "Master Series MX Anywhere 3", 4000, true),
    new Mouses (0, "https://http2.mlstatic.com/D_NQ_NP_977588-MLA51172463642_082022-O.webp", 301, "Logitech", 7750, "Mouse", "G Series Lightspeed G305", 12000, true),
    new Mouses (0, "https://http2.mlstatic.com/D_NQ_NP_706475-MLA31606024503_072019-O.webp", 302, "Hyper X", 2700, "Mouse", "Pulsefire Core", 6200, false),
    new Mouses (0, "https://http2.mlstatic.com/D_NQ_NP_967693-MLA43631701326_092020-O.webp", 303, "Kougar", 1478, "Mouse", "Minos X2", 3000, false)
]


const containerCards = document.querySelector("#container"),
containerCarrito = document.querySelector("#container1__carrito"),
containerSelectionCarrito = document.querySelector("#container1"),
cruz = document.querySelectorAll(".cruz"),
botonCarrito = document.querySelectorAll(".boton"),
divSelect = document.querySelector(".divSelect");


const usarJson = async function(){
    let response = await fetch('./data.json');
    let dataArray = await response.json();
    dataArray.forEach(element => {
        productos.push(element);
    });
    crearCards(productos,containerCards);
}
usarJson();


let filter = productos;


crearCards(filter,containerCards);
loadEventListener();
function loadEventListener(){
    divSelect.addEventListener("change", selectCategoria);
    divSelect.addEventListener("change", selectFiltro);
    containerCards.addEventListener("click", addCarrito);
    containerCarrito.addEventListener("click", deleteCarrito);
    containerCarrito.addEventListener("click", botonRestar);
    containerCarrito.addEventListener("click", botonSumar);
    containerCarrito.addEventListener("click", botonBack);
    containerCarrito.addEventListener("click", botonGuardar);
    containerCarrito.addEventListener("click", botonEnvio);
    containerSelectionCarrito.addEventListener("click", botonComprar);
}


Toastify({
    text: "CARRITO",
    duration: 0,
    gravity: "top",
    position: "right", 
    style: {
      opacity: ".93",
      background: "linear-gradient(to top, #00b09b, #96c93d)",
      border: "2px solid white",
    },
    onClick: function(){
        showCarrito();
        HTMLCarrito(carrito,containerCarrito);
    }
}).showToast();

function galery(){
    if(carrito.length > 1){
        return "img";
    }else{
        return "";
    }
}

function calcularTotal(array){
    let total = 0;
    array.forEach(element => {
        total += element.precio*element.cantidad;
    })
    return total
}


function selectCategoria(e){
    if(e.target.id == ("selectCategoria")){
        if (e.target.value != ("Categoria")) {
            filter = productos.filter(objeto => objeto.categoria == e.target.value);  
            crearCards(filter,containerCards); 
        }else{
            crearCards(productos,containerCards);
        }
    }
}
function selectFiltro(e){
    if(e.target.id == ("selectFiltro")){
        if(e.target.value == "2"){
            crearCards(filter.sort((a,b)=>{return b.precio-a.precio}),containerCards);
        }
        else if(e.target.value == "1"){
            crearCards(filter.sort((a,b)=>{return a.precio-b.precio}),containerCards);
        }
    }
}


carrito=[];
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.forEach(i => {
        index = carrito.findIndex(item => item.id == i.id);
        carrito.splice(index,1);
        if(i.categoria == "Teclado"){
            producto = new Teclados(i.cantidad,i.imagen,i.id,i.marca,i.precio,i.categoria,i.nombre,i.switches,i.wireless);
            carrito.push(producto);
        }
        else if(i.categoria == "Smart TV"){
            producto = new Tvs(i.cantidad,i.imagen,i.id,i.marca,i.precio,i.categoria,i.display,i.pulgadas,i.resolucion);
            carrito.push(producto);
        }
        else if(i.categoria == "Parlante"){
            producto = new Tvs(i.cantidad,i.imagen,i.id,i.marca,i.precio,i.categoria,i.nombre,i.conector,i.potencia);
            carrito.push(producto);
        }
        else if(i.categoria == "Mouse"){
            producto = new Tvs(i.cantidad,i.imagen,i.id,i.marca,i.precio,i.categoria,i.nombre,i.dpi,i.wireless);
            carrito.push(producto);
        }
    });
}

function addCarrito(e){
    e.preventDefault();
    if(e.target.classList.contains("boton")){
        selectedProduct = productos.find(element => element.id == e.target.parentElement.id);
        selectedProduct.cantidad++;
        carrito.forEach(i => {
            if (i.id == selectedProduct.id) {
                index = carrito.findIndex(item => item.id == selectedProduct.id);
                carrito.splice(index,1);
                selectedProduct.cantidad++;
            }
        });
        carrito.push(selectedProduct);
        localStorage.setItem("carrito",JSON.stringify(carrito));
        HTMLCarrito(carrito,containerCarrito);
        Toastify({
            text: "Agregaste un producto al carrito",
            duration: 1000,
            gravity: "bottom",
            position: "right", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(to top, #00b09b, #96c93d)",
            },
        }).showToast();
    }
}
function deleteCarrito(e){
    if(e.target.classList.contains("cruz")){
        deleteId = e.target.id;
        selectedProduct = carrito.find(product => product.id == deleteId);
        selectedProduct.cantidad = 0;
        carrito = carrito.filter(product => product.id != deleteId);
        localStorage.setItem("carrito",JSON.stringify(carrito));
        HTMLCarrito(carrito,containerCarrito);
    }
}
function showCarrito(){
    if (containerSelectionCarrito.classList == "unshow"){
        containerSelectionCarrito.classList = "show";
        containerCards.classList = "left";
    }
    else if (containerSelectionCarrito.classList == "show"){
        containerSelectionCarrito.classList = "unshow";
        containerCards.classList = "";
    }
}


function botonEnvio(e){
    e.target.classList == "boton botonDatos" && HTMLEnvio();
}
function botonGuardar(e){
    e.target.innerHTML == "GUARDAR" && HTMLCheckOut(carrito,containerCarrito);
}
function botonBack(e){
    if (e.target.id == ("-1")) {
        HTMLCheckOut(carrito,containerCarrito)
    }else if (e.target.id == ("-2")) {
        HTMLCarrito(carrito,containerCarrito)
    }
}
function botonComprar(e){
    e.target.classList == ("botoncomprar") && HTMLCheckOut(carrito,containerCarrito);
}
function botonRestar(e){
    if(e.target.classList.contains("menosuni")){
        selectedProduct = carrito.find(element => element.id == e.target.id);
        selectedProduct.cantidad--;
        if (selectedProduct.cantidad == 0){
            carrito = carrito.filter(product => product.id != selectedProduct.id);
        }
        localStorage.setItem("carrito",JSON.stringify(carrito));
        HTMLCarrito(carrito,containerCarrito);
    }
}
function botonSumar(e){
    if(e.target.classList.contains("masuni")){
        selectedProduct = carrito.find(product => product.id == e.target.id);
        selectedProduct.cantidad++;
        localStorage.setItem("carrito",JSON.stringify(carrito));
        HTMLCarrito(carrito,containerCarrito);
    }
}
// function botonGuardar(e){
//     if(e.target.innerHTML == "GUARDAR"){

//     }
// }

function HTMLCarritoVacio(container) {
    carritoVacio = document.createElement('div');
    carritoVacio.className = "carritoVacio";
    carritoVacio.innerHTML = `
    <h2>PARECE QUE EL CARRITO ESTA VACIO REGRESANDO...</h2>
    `;
    container.appendChild(carritoVacio);
}
function HTMLCarrito(array,container){
    HTMLDelete(container);
    if(carrito.length == 0){
        HTMLCarritoVacio(container);
        setTimeout(()=> {
            HTMLDelete(container);
            showCarrito();
            crearCards(productos,containerCards);
        }, 2000)
    }else{
        array.forEach(i => {
            card = document.createElement("div");
            card.className = "card";
            card.id = `${i.id}`;
            card.innerHTML =`
                <h4 class = "card__titulo card__font card__padding">${i.titulo}</h4>
                <button class="cruz" id="${i.id}">❌</button>
                <img class = "card__img" src = "${i.imagen}">
                <div class="divcantidad"><button id="${i.id}" class="menosuni">-</button><span class="cantidad">${i.cantidad}</span><button id="${i.id}"class="masuni">+</button></div>
                <span class = "card__precio card__font">$${i.precio*i.cantidad}</span>`;
            container.appendChild(card);
        });
        container.appendChild(HTMLTotal(calcularTotal(carrito)));
    }
}
function HTMLCheckOut(array,container){
    HTMLDelete(container);
    checkOut = document.createElement('div');
    checkOut.className = "checkOut";
    checkOut.innerHTML = `
    <div class="divSup">
        <div class="divBackButton">
            <i class="fa-solid fa-arrow-left-long backButton" id="-2"></i>      
        </div>
        <span class="span">CHECKOUT</span>
    </div>
    <div class="divBotonDatos">
        <button class="boton botonDatos">Ingresar direccion de envio</button>
    </div>`;
    containerCheckout = document.createElement('div');
    containerCheckout.className = "containerCheckout";
    containerCheckout.innerHTML = `
        <div class="containerbot">
            <button class="boton check">Sucursal</button>
            <button class="boton check">Domicilio</button>
        </div>`;
    containerCheckout.appendChild(HTMLImagenes(carrito));        
    checkOut.appendChild(containerCheckout);
    checkOut.appendChild(HTMLTotal(calcularTotal(array)));
    container.appendChild(checkOut);
}
function HTMLImagenes(array){  
    containerImg = document.createElement('div');
    containerImg.className="containerImg";
    for (let i = 0; i < carrito.length && i < 4; i++) {
        galeria = document.createElement('div');
        galeria.id = `${carrito[i].id}`;
        galeria.className = "divimg";
        img = document.createElement('img');
        if(i < 3){
            img.src= carrito[i].imagen
            img.className = galery();
            galeria.appendChild(img);
        }
        else{
            more = document.createElement('div');
            more.innerHTML = `<span class="divSpan">+${array.length - 3}</span>`;
            more.className = "divImg";
            galeria.appendChild(more);
        }
        containerImg.appendChild(galeria);
    }
    return containerImg
}
function HTMLTotal(valor){
    divInferior__carrito = document.createElement('div');
    divInferior__carrito.className = "divInferior__carrito";
    divInferior__carrito.innerHTML = `<div class="container__total"><h4 class = "total">TOTAL: $${valor}</h4></div>`;
    container__total = document.createElement('div');
    container__total.className="divComprar";
    container__total.innerHTML =`<button class = "botoncomprar">COMPRAR</button>`;
    divInferior__carrito.appendChild(container__total)
    return divInferior__carrito
}
function HTMLDelete(container){
    container.innerHTML = "";
}
function HTMLEnvio(){
    HTMLDelete(containerCarrito);
    formEnvio = document.createElement("div");
    formEnvio.className = "formEnvio";
    formEnvio.innerHTML = `
    <div class="datosEnvio">
        <div class="divSup">
            <div class="divBackButton">
                <i class="fa-solid fa-arrow-left-long backButton" id="-1"></i>      
            </div>
            <span class="span">DATOS DE ENVIO</span>
        </div>
        <form class="containerForm">
            <label class="label">CALLE</label>
            <input required type="text" class="input" id="0100"> 
            <label class="label">ALTURA</label> 
            <input type="number" class="input" id="-101">
            <label class="label">PROVINCIA</label>
            <input type="text" class="input" id="-102"> 
            <label class="label">MUNICIPIO</label> 
            <input type="text" class="input" id="-103">
            <label class="label">TELEFONO</label>  
            <input type="tel" class="input" id="-104">
            <label class="label">CODIGO POSTAL</label>
            <input type="text" class="input" id="-105">
            <label class="label" id="labelForm">INDICACIONES ADICIONALES</label>
            <input type="text" class="input" id="inputForm">
            <button type="button" class="boton">GUARDAR</button>  
        </form>
    </div>`;
    containerCarrito.appendChild(formEnvio);
}
function crearCards(array,container){
    HTMLDelete(container)
    array.forEach(i => {
        card = document.createElement("div");
        card.className = "card";
        card.id = `${i.id}`;
        card.innerHTML =`
            <h4 class = "card__titulo card__font card__padding">${i.titulo}</h4>
            <img class = "card__img" src = "${i.imagen}">
            <span class = "card__precio card__font">$${i.precio}</span>
            <div class = "containerbotones" id="${i.id}">
                <button class = "boton">Añadir al carrito</button>
            </div>`;
        container.appendChild(card);
    });
}