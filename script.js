class Televisores {
    constructor (marca, display, precio, pulgadas, resolucion){
        this.marca = marca;
        this.display = display;
        this.precio = parseFloat(precio);
        this.pulgadas = parseInt(pulgadas);
        this.resolucion = resolucion;
    }
    mostrarInfo(){
        return `${this.marca} ${this.display} "${this.pulgadas} - ${this.resolucion} / $${this.precio}`;
    }
}
class Parlantes {
    constructor (nombre,marca, precio, conector, potencia){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.conector = conector;
        this.potencia = potencia;
    }
    mostrarInfo(){
        return `${this.marca} ${this.nombre} ${this.potencia} - ${this.conector} / $${this.precio}`;
    }
}
class Teclados {
    constructor (nombre, marca, precio, switches, wireless){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.switches = switches;
        this.wireless = wireless;
    }
    mostrarInfo(){
        let wireless = "";
        if (this.wireless == true){    
            wireless = "WIRELESS";  
        }
        return `${this.marca} ${this.nombre} - ${this.switches} ${wireless} / $${this.precio}`;
    }
}
class Mouses {
    constructor (nombre, marca, precio, dpi, wireless){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.dpi = parseInt(dpi);
        this.wireless = false;
    }
    mostrarInfo(){
        let wireless = "";
        if (this.wireless == true){    
            wireless = "WIRELESS";
            console.log(wireless)
        }
        return `${this.marca} ${this.nombre} - ${this.dpi} DPI ${wireless} / $${this.precio}`;
    }
}

const televisores = [
    new Televisores ("SAMSUNG", "QLED", 500000, 72, "4K"),
    new Televisores ("BGH", "OLED", 120000, 50, "2K"),
    new Televisores ("ZOEI", "LCD", 80000, 40, "FULL HD"),
    new Televisores ("LG", "LED", 60000, 32, "HD")
]
const parlantes = [
    new Parlantes ("FLIP 6", "JBL", 36000, "USB-C", "20W"),
    new Parlantes ("CLIP 4", "JBL", 17390, "USB-C", "5W"),
    new Parlantes ("MI", "XIAOMI", 14000, "AUXILIAR ,USB-C", "16W"),
    new Parlantes ("GO 3", "JBL", 9870, "USB","4.2W")
]
const teclados = [
    new Teclados ("PRO X", "LOGITECH", 26000, "CHERRY MX BROWN", true),
    new Teclados ("ALLOY ELITE", "HYPER X", 23000, "CHERRY MX RED"),
    new Teclados ("FIZZ PRO K616", "RED DRAGON", 11000, "OUTEMU RED", true),
    new Teclados ("KUMARA K552", "RED DRAGON", 10000, "OUTEMU BLUE")
]
const mouses = [
    new Mouses ("MASTER SERIES MX ANYWHERE 3", "LOGITECH", 15000, 4000, true),
    new Mouses ("G SERIES LIGHTSPEED G305", "LOGITECH", 7750, 12000, true),
    new Mouses ("PULSEFIRE CORE", "HYPER X", 2700, 6200),
    new Mouses ("MINOS X2", "KOUGAR", 1478, 3000)
]

function mostrarProductos(z){
    let info = "Tenemos estos 4 productos disponibles (Ingrese un numero del 1 al 4)\n\n";
    let count = 0;
    z.forEach(x =>{
        count += 1;
        info += `${count}. ${x.mostrarInfo()}\n`;
    });
    info += "\nX. Volver al menu principal";
    return info;
}
function confirmarCompra(input){
    let entrada = "";
    switch(loop){
    case '1':
        for (const i of televisores) {
            if (i.marca == "SAMSUNG" && input == 1){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
            else if(i.marca == "BGH" && input == 2){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
            else if(i.marca == "ZOEI" && input == 3){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
            else if (i.marca == "LG" && input == 4){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
        }
        break
    case '2':
        for (const i of parlantes) {
            if (i.precio == 36000 && input == 1){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
            else if(i.precio == 17390 && input == 2){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
            else if(i.precio == 14000 && input == 3){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
            else if (i.precio == 9870 && input == 4){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
        }
        break;
    case '3':
        for (const i of teclados) {
            if (i.precio == 26000 && input == 1){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
            else if(i.precio == 23000 && input == 2){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
            else if(i.precio == 11000 && input == 3){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
            else if (i.precio == 10000 && input == 4){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
        }   
        break;
    case '4':
        for (const i of mouses) {
            if (i.precio == 15000 && input == 1){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
            else if(i.precio == 7750 && input == 2){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
            else if(i.precio == 2700 && input == 3){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
            else if (i.precio == 1478 && input == 4){
                entrada = prompt(`Usted eligio ${i.mostrarInfo()}\n\n¿Desea confirmar la compra? [S - N]`);
            }
        }   
        break;
    }

if (entrada == "S"){alert("Compra Exitosa");}
else if(entrada == "N"){loop = 0; alert("Volviendo al menu principal");}
}

let loop;
let controlLoop = ["1","2","3","4","X"];



while (loop != "X"){
    loop = prompt("Bienvenido a mi plataforma de comercio electronico\n\n1. Smart TV\n2. Parlantes\n3. Teclados\n4. Mouse\n\nX. Salir");

    if (controlLoop.includes(loop) == false){(alert("Error opcion invalida"));}

    if (loop == 1){
        confirmarCompra(prompt((mostrarProductos(televisores))));
    }else if (loop == 2){
        confirmarCompra(prompt((mostrarProductos(parlantes))));
    }else if (loop == 3){
        confirmarCompra(prompt((mostrarProductos(teclados))));
    }else if (loop == 4){
        confirmarCompra(prompt((mostrarProductos(mouses))));
    }
}

alert("Gracias vuelva prontos :D");