import { useState } from 'react'

let animal = {
    nombre: 'Mia',
    grupo: 'perro'
};

let sonido = "guau";
let gato = false;

if (gato){
    sonido = "miau";
}


var miSolicitud = new Request("/descarga.png");

function DespertarMia2 (){
    const [name, setName] = useState("")
    fetch(miSolicitud)
        .then(resp => {
            return resp.json() 
        })
        .then(myJson => {
            setName(myJson)
        })
    console.log(3)
    return (<h1>{name}</h1>);
}

function DespertarMia(){
    return (
        <section>
            <h1> {animal.nombre} </h1>
            <p>
                Es una {animal.grupo} que hace {sonido}
            </p>
        </section>
    );
}


function DespertarMiaMama({children}){
    return (
        <div>
            <h1>aqui se envian los hijos</h1>
            {children}
        </div>
    );
}

export default function func (){
    return(
        <DespertarMiaMama>
            <DespertarMia />
        </DespertarMiaMama>
    )
}