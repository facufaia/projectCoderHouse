function confirmarSmartTv(x){
    if (smartTv == 1){
        confirmacion = prompt('Usted eligio Philips 24"\n\n ¿Confirma la compra? S/N')
        confirmacion = confirmacion.toUpperCase()
        switch(confirmacion){
        case 'S':
            alert("Compra exitosa")
            loop = 0
            break
        case 'N':
            alert("Regresando")
            break
        default:
            alert("¡Error! \n\nOpcion invalida \n\nRegresando")
            break
        }
    }
    else if (smartTv == 2){
        confirmacion = prompt('Usted eligio Samsung 32"\n\n ¿Confirma la compra? S/N')
        confirmacion = confirmacion.toUpperCase()
        switch(confirmacion){
        case 'S':
            alert("Compra exitosa")
            loop = 0
            break
        case 'N':
            alert("Regresando")
            break
        default:
            alert("¡Error! \n\nOpcion invalida \n\nRegresando")
            break
        }
    }
    else if (smartTv == 3){
        confirmacion = prompt('Usted eligio LG 43"\n\n ¿Confirma la compra? S/N')
        confirmacion = confirmacion.toUpperCase()
        switch(confirmacion){
        case 'S':
            alert("Compra exitosa")
            loop = 0
            break
        case 'N':
            alert("Regresando")
            break
        default:
            alert("¡Error! \n\nOpcion invalida \n\nRegresando")
            break
        }
    }
    else if(smartTv == 4){
        alert("Volviendo al menu principal")
        loop = 0
    }
    else{
        alert("¡Error! \n\nDebe ingresa un numero entre 1 y 4 \n\nIntentelo nuevamente")
    }
}
function confirmarParlante(x){
    if (parlante == 1){
        confirmacion = prompt('Usted eligio JBL Go 3\n\n ¿Confirma la compra? S/N')
        confirmacion = confirmacion.toUpperCase()
        switch(confirmacion){
        case 'S':
            alert("Compra exitosa")
            loop = 0
            break
        case 'N':
            alert("Regresando")
            break
        default:
            alert("¡Error! \n\nOpcion invalida \n\nRegresando")
            break
        }
    }
    else if (parlante == 2){
        confirmacion = prompt('Usted eligio Xiaomi Mi\n\n ¿Confirma la compra? S/N')
        confirmacion = confirmacion.toUpperCase()
        switch(confirmacion){
        case 'S':
            alert("Compra exitosa")
            loop = 0
            break
        case 'N':
            alert("Regresando")
            break
        default:
            alert("¡Error! \n\nOpcion invalida \n\nRegresando")
            break
        }
    }
    else if (parlante == 3){
        alert("Volviendo al menu principal")
        loop = 0
        }
    else{
        alert("¡Error! \n\nDebe ingresa un numero entre 1 y 3 \n\nIntentelo nuevamente")
    }
}
function confirmarTeclado(x){
    if (teclado == 1){
        confirmacion = prompt('Usted eligio HyperX Alloy Core"\n\n ¿Confirma la compra? S/N')
        confirmacion = confirmacion.toUpperCase()
        switch(confirmacion){
        case 'S':
            alert("Compra exitosa")
            loop = 0
            break
        case 'N':
            alert("Regresando")
            break
        default:
            alert("¡Error! \n\nOpcion invalida \n\nRegresando")
            break
        }
    }
    else if (teclado == 2){
        confirmacion = prompt('Usted eligio Redragon Yama K550\n\n ¿Confirma la compra? S/N')
        confirmacion = confirmacion.toUpperCase()
        switch(confirmacion){
        case 'S':
            alert("Compra exitosa")
            loop = 0
            break
        case 'N':
            alert("Regresando")
            break
        default:
            alert("¡Error! \n\nOpcion invalida \n\nRegresando")
            break
        }
    }
    else if (teclado == 3){
        confirmacion = prompt('Usted eligio Noganet NKB-500"\n\n ¿Confirma la compra? S/N')
        confirmacion = confirmacion.toUpperCase()
        switch(confirmacion){
        case 'S':
            alert("Compra exitosa")
            loop = 0
            break
        case 'N':
            alert("Regresando")
            break
        default:
            alert("¡Error! \n\nOpcion invalida \n\nRegresando")
            break
        }
    }
    else if(teclado == 4){
        alert("Volviendo al menu principal")
        loop = 0
    }
    else{
        alert("¡Error! \n\nDebe ingresa un numero entre 1 y 4 \n\nIntentelo nuevamente")
    }
}
function confirmarMouse(x){
    if (mouse == 1){
        confirmacion = prompt('Usted eligio Logitech G Series Lightsync G203"\n\n ¿Confirma la compra? S/N')
        confirmacion = confirmacion.toUpperCase()
        switch(confirmacion){
        case 'S':
            alert("Compra exitosa")
            loop = 0
            break
        case 'N':
            alert("Regresando")
            break
        default:
            alert("¡Error! \n\nOpcion invalida \n\nRegresando")
            break
        }
    }
    else if (mouse == 2){
        confirmacion = prompt('Usted eligio Genius NX-7000\n\n ¿Confirma la compra? S/N')
        confirmacion = confirmacion.toUpperCase()
        switch(confirmacion){
        case 'S':
            alert("Compra exitosa")
            loop = 0
            break
        case 'N':
            alert("Regresando")
            break
        default:
            alert("¡Error! \n\nOpcion invalida \n\nRegresando")
            break
        }
    }
    else if (mouse == 3){
        confirmacion = prompt('Usted eligio Xinua M3"\n\n ¿Confirma la compra? S/N')
        confirmacion = confirmacion.toUpperCase()
        switch(confirmacion){
        case 'S':
            alert("Compra exitosa")
            loop = 0
            break
        case 'N':
            alert("Regresando")
            break
        default:
            alert("¡Error! \n\nOpcion invalida \n\nRegresando")
            break
        }
    }
    else if(mouse == 4){
        alert("Volviendo al menu principal")
        loop = 0
    }
    else{
        alert("¡Error! \n\nDebe ingresa un numero entre 1 y 4 \n\nIntentelo nuevamente")
    }
}

let loop = 0;
while (loop != 5){
    loop = prompt("Bienvenido a mi plataforma de comercio electronico\n\n1. Smart TV\n2. Parlantes\n3. Teclados\n4. Mouse\n5. Salir\n\n Elija el producto que desea llevar: ")

    while (loop == 1){
        smartTv = prompt('Tenemos disponibles estos 3 modelos de Smart TV\n\n1. Philips 24"\n2. Samsung 32"\n3. LG 43"\n4. Volver al menu principal')
        confirmarSmartTv(smartTv)
    }
    while (loop == 2){
        parlante = prompt('Tenemos disponibles estos 2 modelos de Parlantes\n\n1. JBL Go 3\n2. Xiaomi Mi\n3. Volver al menu principal')
        confirmarParlante(parlante)
    }
    while (loop == 3){
        teclado = prompt('Tenemos disponibles estos 3 modelos de Teclados\n\n1. HyperX Alloy Core\n2. Redragon Yama K550\n3. Noganet NKB-500\n4. Volver al menu principal')
        confirmarTeclado(teclado)
    }
    while (loop == 4){
        mouse = prompt('Tenemos disponibles estos 3 modelos de Mouse\n\n1. Logitech G Series Lightsync G203\n2. Genius NX-7000\n3. Xinua M3\n4. Volver al menu principal')
        confirmarMouse(mouse)
    }
}

alert("Gracias vuelva prontos :D")