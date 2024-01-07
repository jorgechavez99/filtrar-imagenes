//Accerder a los elementos del DOM

/*const btnMar=document.querySelector('#btnMar')
const btnEdificio=document.querySelector('#btnEdificio')
const btnSeñales=document.querySelector('#btnSeñales')
const btnArena=document.querySelector('#btnArena')
const btnCasa=document.querySelector('#btnCasa')*/
const botones = document.querySelector('#botones')
const cajaFotos = document.querySelector('#cajaFotos')
const cajaFotoGrande = document.querySelector('#cajaFotoGrande')

const fragment = document.createDocumentFragment();

//Almacenar los objetos

const arrayImagenes = [
    imagen1 = {
        foto: 'assets/viajes-1.jpg',
        alttext: 'playa con una palmera',
        titulo: 'titulo del viaje 1',
        id: ["Mar","Cosa"]
    },
    imagen2 = {
        foto: 'assets/viajes-2.jpg',
        textoalt: 'playa con bungalows',
        titulo: 'titulo del viaje 2',
        id: ["Mar","Edificio"]
    },
    imagen3 = {
        foto: 'assets/viajes-3.jpg',
        alttext: 'poste con señalizacion',
        titulo: 'titulo del viaje 3',
        id: ["Señales"]
    },
    imagen4 = {
        foto: 'assets/viajes-4.jpg',
        alttext: 'plaza con pileta',
        titulo: 'titulo del viaje 4',
        id: ["Edificio"]
    },
    imagen5 = {
        foto: 'assets/viajes-5.jpg',
        alttext: 'puente',
        titulo: 'titulo del viaje 5',
        id: ["Edificio"]

    }, imagen6 = {
        foto: 'assets/viajes-6.jpg',
        alttext: 'malecon con mar',
        titulo: 'titulo del viaje 6',
        id: ["Mar"]
    }
];


/**
 * @param arrayBotones(string)
 */
const arrayBotones = ['Mar', 'Edificio', 'Señales', 'Arena', 'Cosa']

// generar eventos

botones.addEventListener('click', (ev) => {
    const boton = ev.target.value;
    mostrarFotos()
    console.log(boton)
});


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
crearBotones()

const mostrarFotos = (boton) => {


    const prueba=()=>{
const ejec=arrayImagenes.filter((item)=>{
item.id=="Mar"
console.log(ejec)
})
    }
    prueba()


    /*arrayImagenes.forEach((item) => {
        const caja = document.createElement('DIV');
        const titulos = document.createElement('H1')
        titulos.textContent = item.titulo
        const imagenes = document.createElement('IMG');
        imagenes.src = item.foto

        caja.append(titulos)
        caja.append(imagenes)
        fragment.append(caja)
    })

    cajaFotos.append(fragment)*/

}

