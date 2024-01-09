//Accerder a los elementos del DOM

const botones = document.querySelector('#botones')
const cajaFotos = document.querySelector('#cajaFotos')
const cajaFotoGrande = document.querySelector('#cajaFotoGrande')

const fragment = document.createDocumentFragment();

//Almacenar los objetos

/***
 * @param arrayImagenes =[objetos{foto: url, alttex:string, titulo:String, tag:Array}]
 */

const arrayImagenesSelec = [];


const arrayImagenes = [
    imagen1 = {
        foto: 'assets/viajes-1.jpg',
        alttext: 'playa con una palmera',
        titulo: 'titulo del viaje 1',
        tag: ["mar", "cosa"],
        id: 1,
    },
    imagen2 = {
        foto: 'assets/viajes-2.jpg',
        textoalt: 'playa con bungalows',
        titulo: 'titulo del viaje 2',
        tag: ["mar", "arena",],
        id: 2,
    },
    imagen3 = {
        foto: 'assets/viajes-3.jpg',
        alttext: 'poste con señalizacion',
        titulo: 'titulo del viaje 3',
        tag: ["señales"],
        id: 3,
    },
    imagen4 = {
        foto: 'assets/viajes-4.jpg',
        alttext: 'plaza con pileta',
        titulo: 'titulo del viaje 4',
        tag: ["edificio", "mar"],
        id: 4,

    },
    imagen5 = {
        foto: 'assets/viajes-5.jpg',
        alttext: 'puente',
        titulo: 'titulo del viaje 5',
        tag: ["edificio", "señales"],
        id: 5,

    }, imagen6 = {
        foto: 'assets/viajes-6.jpg',
        alttext: 'malecon con mar',
        titulo: 'titulo del viaje 6',
        tag: ["mar", "cosa"],
        id: 6,
    }
];





/**
 * @param arrayBotones[string]//ingresar los nombres de los botones que queremos añadir
 */
const arrayBotones = ['mar', 'edificio', 'señales', 'arena', 'cosa']

// generar eventos

document.addEventListener('click', (ev) => {
    //Evento para imprimir los botones
    if (ev.target.matches("button")) {
        const boton = ev.target.value;

        filtrarImagen(boton)

    }
    //Evento para imprimir las imagenes
    if (ev.target.matches("img")) {
        const fotoGrande = ev.target.id
        intercambioPosicion(fotoGrande)

    }

})


const intercambioPosicion = (fotoGrande) => {
   // if (arrayImagenesSelec.length != 1) {

                //console.log(fotoGrande);

        limpiarCajaFotos()

        arrayImagenesSelec.forEach((item) => {

            if (item.id == fotoGrande) {
                mostrarFotosGrande(item)
            } else {

                mostrarFotos(item)
            }

            // console.log(tg.id + " es igual a " + fotoGrande);
        })
    

}

/*
let arrayBaner=[];
const arrayboton = arrayImagenes.forEach((item) => {
 
    const resultado = item.seleccion;
    const rec=resultado.toString()
    arrayBaner.push(rec)
    

})
console.log(arrayBaner)
*/


//generar Funciones



const crearBotones = () => {
    arrayBotones.forEach((item) => {
        const button = document.createElement('BUTTON');
        button.value = item;
        button.textContent = item;

        fragment.append(button)
    })

    botones.append(fragment)
}

//funcion filtrar

const filtrarImagen = (boton) => {

    limpiarCajaFotos()
    let contador = 0;

    console.log(arrayImagenesSelec)
    //Limpio el array por cada vuelta
    arrayImagenesSelec.splice(0, arrayImagenesSelec.length);

    arrayImagenes.forEach((item) => {
        const buscar = item.tag.some((btn) => btn == boton)

        if (buscar) {
            //Estoy indicando si la condicion es verdadera que pushee todos los true encontrados
            arrayImagenesSelec.push(item)
        }
    })

    arrayImagenesSelec.forEach((tg) => {
        if (arrayImagenesSelec.length != 1) {
            if (contador == 0) {
                mostrarFotosGrande(tg)
                contador++;
            } else {
                mostrarFotos(tg)
            }
        } else {
            mostrarFotosGrande(tg)
            mostrarFotos(tg)
        }

    })

    //console.log(arrayImagenesSelec);

    mostrarParrafo(boton)

}

const mostrarParrafo = (boton) => {

    const cantMostrar = arrayImagenesSelec.length
    const parrafoInfo = document.createElement('P')
    parrafoInfo.textContent = `Se ha encotrado ${cantMostrar} imagenes con el tag ${boton}`

    cajaFotoGrande.append(parrafoInfo)
}


const mostrarFotos = (item) => {

    const { foto, titulo, id } = item

    const caja = document.createElement('DIV');
    const titulos = document.createElement('P')
    titulos.textContent = titulo
    const imagenes = document.createElement('IMG');
    imagenes.src = foto
    imagenes.id = id
    caja.append(titulos)
    caja.append(imagenes)

    fragment.append(caja)
    cajaFotos.append(fragment)

}

const mostrarFotosGrande = (item) => {

    const { foto, titulo, id } = item
    cajaFotoGrande.innerHTML = ''
    const caja = document.createElement('DIV');
    const titulos = document.createElement('P')
    titulos.textContent = titulo
    const imagenes = document.createElement('IMG');
    imagenes.src = foto
    imagenes.id = id
    //console.log(imagenes)
    caja.append(titulos)
    caja.append(imagenes)

    fragment.append(caja)
    cajaFotoGrande.append(fragment)
    //console.log(cajaFotoGrande)
}

const limpiarCajaFotos = () => {
    cajaFotos.innerHTML = '';
    cajaFotoGrande.innerHTML = '';
}


const mostrarFotoGrande = (fotoGrande) => {

    cajaFotoGrande.innerHTML = ''
    const fotos = document.createElement('IMG')
    fotos.src = fotoGrande
    fragment.append(fotos)
    cajaFotoGrande.append(fragment)

}

crearBotones()
