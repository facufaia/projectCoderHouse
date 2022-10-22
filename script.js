function compraMas() {
    alert("Compra exitosa")
    while (compraLoop){
        seguirComprando = toUpperCase(prompt("¿Desea seguir comprando? S/N: "))
        if (seguirComprando == "S"){
            alert("Volviendo al menu principal")
            break
        }else{
            alert("Opcion invalida")
        }
    }
}

compraLoop = true
let loop = 0;
while (loop != 5){
    loop = prompt("Bienvenido a mi plataforma de comercio electronico\n\n1. Smart TV\n2. Parlantes\n3. Teclados\n4. Mouse\n5. Salir\n\n Elija el producto que desea llevar: ")
    while (loop == 1){
        smartTv = prompt('Tenemos disponibles estos 3 modelos de Smart TV\n\n1. Philips 24"\n2. Samsung 32"\n3. LG 43"\n4. Volver al menu principal')
        switch(smartTv){
            case '1':
                compraMas()
                break
            case '2':
                compraMas()
                break
            case '3':
                compraMas()
                break
            case '4':
                alert("Volviendo al menu principal")
                loop = 0
                break
            default:
                alert("Error debe ingresar un numero entre 1 y 4")
        }
    }
    while (loop == 2){
        parlante = prompt('Tenemos disponibles estos 2 modelos de Parlantes\n\n1. JBL Go 3\n2. Xiaomi Mi\n3. Volver al menu principal')
        switch(parlante){
            case '1':
                compraMas()
                break
            case '2':
                compraMas()
                break
            case '3':
                alert("Volviendo al menu principal")
                loop = 0
                break
            default:
                alert("Error debe ingresar un numero entre 1 y 3")
        }
    }
    while (loop == 3){
        teclado = prompt('Tenemos disponibles estos 3 modelos de Teclados\n\n1. HyperX Alloy Core\n2. Redragon Yama K550\n3. Noganet NKB-500\n4. Volver al menu principal')
        switch(teclado){
            case '1':
                compraMas()
                break
            case '2':
                compraMas()
                break
            case '3':
                compraMas()  
                break  
            case '4':
                alert("Volviendo al menu principal")
                loop = 0
                break
            default:
                alert("Error debe ingresar un numero entre 1 y 4")
        }
    }
    while (loop == 4){
        mouse = prompt('Tenemos disponibles estos 3 modelos de Mouse\n\n1. Logitech G Series Lightsync G203\n2. Genius NX-7000\n3. Xinua M3\n4. Volver al menu principal')
        switch(mouse){
            case '1':
                compraMas()
                break
            case '2':
                compraMas()
                break
            case '3':
                compraMas()  
                break  
            case '4':
                alert("Volviendo al menu principal")
                loop = 0
                break
            default:
                alert("Error debe ingresar un numero entre 1 y 4")
        }
    }
}