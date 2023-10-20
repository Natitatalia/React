let titles = [
    {name: "mia", sonido: "gua"},
    {name: "nieves", sonido: "miau"},
    {name: "Rebeca", sonido: "kiri"}
];

  
function Funcis(){
    console.log(1)
    return(
        Object.keys(titles).map((element, i) =>
            <li key={i}>{element}</li>
        )
    );
}

export default Funcis 