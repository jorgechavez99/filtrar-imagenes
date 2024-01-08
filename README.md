# FILTRAR IMAGENES
---
##Introduccion

Este proyecto permite poder mostrar al usuario, cuando le de click a cada boton se muestren las imagenes mencionadas en dicho boton,a su vez cuando clicke la imagen podra ver esta misma agrandada en la parte superior.

---


## Tecnologías Utilizadas


-Javascript
-CSS
-HTML

---


##Funcionamiento

Comenzamos accediento a los elementos del DOM.

```JS
const botones = document.querySelector('#botones')
const cajaFotos = document.querySelector('#cajaFotos')
const cajaFotoGrande = document.querySelector('#cajaFotoGrande')
```

Luego creamos el ArrayImagenes en el cual especificamos que los objetos que utilizaremos para crear las imagenes segun se requieran.

```js
const arrayImagenes = [
    imagen1 = {
        foto: 'assets/viajes-1.jpg',
        alttext: 'playa con una palmera',
        titulo: 'titulo del viaje 1',
        id: ["Mar", "Cosa"]
    },
    imagen2 = {
        foto: 'assets/viajes-2.jpg',
        textoalt: 'playa con bungalows',
        titulo: 'titulo del viaje 2',
        id: ["Mar", "Edificio"]
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
```
Creamos el ArrayBotones en el cual indicaremos la cantidad segun los nombres en String que coloquemos para que posteriormente se vuelvan Botones.

```js
const arrayBotones = ['Mar', 'Edificio', 'Señales', 'Arena', 'Cosa']
```
Luego creamos un evento click el cual indicara que en cada momento que se le de click al boton seleccionado se mostrará las imagenes que guarden relacion con dicho boton.

```js
botones.addEventListener('click', (ev) => {
    const boton = ev.target.value;
    mostrarFotos()
    console.log(boton)
});
```
Al dar click da inicio a la funcion mostrarFotos la cual permite mostrar las imagenes seleccionadas, creando un img y un titulo dentro del DIV cajaFotos ( previamente creado en el HTML), 

```js
const mostrarFotos = () => {

    arrayImagenes.forEach((item) => {
        cajaFotos.innerHTML = '';
        const caja = document.createElement('DIV');
        const titulos = document.createElement('H1')
        titulos.textContent = item.titulo
        const imagenes = document.createElement('IMG');
        imagenes.src = item.foto

        caja.append(titulos)
        caja.append(imagenes)
        fragment.append(caja)
    })

    cajaFotos.append(fragment)

}
```
Luego al estar ya las imagenes en pantalla el proyecto nos permite dar click a cualquier imagen y esta aparecerá de un tamaño mayor, gracias a la funcion mostrarFotoGrande.

```js
cajaFotos.addEventListener('click', (ev) => {
    const fotoGrande = ev.target.src
    mostrarFotoGrande(fotoGrande)
    console.log(fotoGrande)

})

const mostrarFotoGrande = (fotoGrande) => {
    cajaFotoGrande.innerHTML=''
    const foto = document.createElement('IMG')
    foto.src = fotoGrande

    fragment.append(foto)
    cajaFotoGrande.append(fragment)


}
```