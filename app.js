// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const pageFields={
    nombreAmigo: document.getElementById("amigo"),
    btnAgregar: document.getElementById("buttonAdd"),
    btnSortear: document.getElementById("sort"),
    listaAmigos: document.getElementById("listaAmigos"),
    resultado: document.getElementById("resultado")
}
const config={
    amigos: []
}


pageFields.nombreAmigo.addEventListener("change", (event)=>{revisarCampoVacio(pageFields.nombreAmigo)} );
function agregarAmigo(){
    let nombre= pageFields.nombreAmigo.value.trim();
    
    if(config.amigos.includes(nombre)){
        alert("El amigo ya fue agregado, intente con un nombre distinto");
        pageFields.nombreAmigo.focus();
        pageFields.nombreAmigo.value="";
        return;
    }
    config.amigos.push(nombre);
    pageFields.btnSortear.setAttribute("disable", "false");
    pageFields.listaAmigos.innerHTML += `<li class="name-item">${nombre}</li>`;
}


function sortearAmigo(){
    let numeroDeAmigos=config.amigos.length;
    console.log(revisarListaVacia(config.amigos));
    if(revisarListaVacia(config.amigos)){
        alert("No hay amigos para sortear");
        return;
    }
    if(numeroDeAmigos < 2){
        alert("Debe haber al menos dos amigos para realizar el sorteo");
        return;
    }
    let ganador=generarNumeroAleatorio(0,numeroDeAmigos -1);
    let amigoGanador=config.amigos[ganador];
    mostrarGanador(amigoGanador);

}

function revisarCampoVacio(field){
    if(field.value.trim() === ""){
        alert("El campo no puede estar vacío");
        pageFields.nombreAmigo.focus();
        pageFields.btnAgregar.setAttribute("disable", "true");
        return true;
    }
    pageFields.btnAgregar.setAttribute("disable", "false");
    return false;
}

function revisarListaVacia(lista){
    if(lista.length === 0){
        
        return true;
    }
    return false;
}
function generarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function mostrarGanador(amigo){
    pageFields.resultado.innerHTML = `<li class="result-item">El amigo secreto es: <span class="result-name">${amigo}</span></li>`;
    pageFields.btnSortear.setAttribute("disable", "true");
}