/*
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./image.jpg");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
*/

/*
const consulta = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    fetch(url).then((respuesta) => {
        return respuesta.json();
    }).then((info) => {
        console.log(info);
        let pokeName = info.name;
        console.log(pokeName);
    })
}

consulta();
*/

const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./image.png");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.other.home.front_default;
        pokeImage(pokeImg);
        let pokeNombre = data.name;
        pokeNom(pokeNombre);
        let datoTipo = data.types[0].type.name;
        imprimirTipo(datoTipo);
        let datoMov = data.moves.length;
        imprimirMoves(datoMov);
        let datoPeso = data.weight;
        imprimirPeso(datoPeso);
        let datoHp = data.stats[0].base_stat;
        imprimirHp(datoHp);
        let datoAtt = data.stats[1].base_stat;
        imprimirAtt(datoAtt);
        let datoDef = data.stats[2].base_stat;
        imprimirDef(datoDef);
        let datoSa = data.stats[3].base_stat;
        imprimirSa(datoSa);
        let datoSd = data.stats[4].base_stat;
        imprimirSd(datoSd);
        let datoSpe = data.stats[5].base_stat;
        imprimirSpe(datoSpe);
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokeNom = (pokeNombre) => {
    let pokeNom = document.getElementById('pokeNombre');
    pokeNom.innerHTML = "<strong>Nombre: </strong>" + pokeNombre;
}

const imprimirTipo = (datoTipo) => {
   let imprimirTipo = document.getElementById('idTipo');
   imprimirTipo.innerHTML = "<strong>Tipo: </strong>" + datoTipo;
}

const imprimirMoves = (datoMov) => {
    let imprimirMoves = document.getElementById('idMoves');
    imprimirMoves.innerHTML = "<strong>Movimientos: </strong>" + datoMov;
}

const imprimirPeso = (datoPeso) => {
    let imprimirPeso = document.getElementById('idPeso');
    imprimirPeso.innerHTML = `<strong>Peso: </strong> ${datoPeso /10}kg`;
}

const imprimirHp = (datoHp) => {
    let imprimirHp = document.getElementById('idHp');
    imprimirHp.innerHTML = "<strong>Hp: </strong>" + datoHp;
}

const imprimirAtt = (datoAtt) =>{
    let imprimirAtt = document.getElementById('idAtt');
    imprimirAtt.innerHTML = "<strong>Attack: </strong>" + datoAtt;
}

const imprimirDef = (datoDef) =>{
    let imprimirDef = document.getElementById('idDef');
    imprimirDef.innerHTML = "<strong>Defense: </strong>" + datoDef;
}

const imprimirSa = (datoSa) =>{
    let imprimirSa = document.getElementById('idSa');
    imprimirSa.innerHTML = "<strong>Special-attack: </strong>" + datoSa;
}

const imprimirSd = (datoSd) =>{
    let imprimirSd = document.getElementById('idSd');
    imprimirSd.innerHTML = "<strong>Special-defense: </strong>" + datoSd;
}

const imprimirSpe = (datoSpe) =>{
    let imprimirSpe = document.getElementById('idSpe');
    imprimirSpe.innerHTML = "<strong>Speed: </strong>" + datoSpe;
}





