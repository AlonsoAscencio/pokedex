const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput= pokeName.value.toLowerCase();
    const url =`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

    fetch(url).then((res)=>{
        if(res.status != "200"){
            console.log(res);
            pokeImage("./pokeball.png");
        } 
        else{
            return res.json();
        }
    }).then((data)=>{
        
        datos(data);
    })

}
poketipos=[];
apuntador=0;
pokemoves=[];
apuntador2=0;
pokeNum=0;


const fetchPokemonId = () =>{
    const url =`https://pokeapi.co/api/v2/pokemon/${this.pokeNum}`;

    fetch(url).then((res)=>{
        if(res.status != "200"){
            console.log(res);
            pokeImage("./pokeball.png");
        } 
        else{
            return res.json();
        }
    }).then((data)=>{
        
        datos(data);
    })

}

let datos = (data) => {
    this.poketipos= [];
    this.pokemoves= [];
    let pokeImg = data.sprites.front_default;
    this.pokeNum = data.id;
    let pokeName = data.forms[0].name;
    let pokeType=[];
    let pokeStats=[];
    let pokeMoves=[];

    for (let i=0; i <= data.types.length - 1 ; i++){
        pokeType[i] = data.types[i].type.name;
        this.poketipos[i]=data.types[i].type.name;
        
    }
   
    for (let i=0; i <= data.stats.length - 1 ; i++){
       
        pokeStats[i] = data.stats[i].base_stat;
    }
    for (let i=0; i <= data.moves.length - 1 ; i++){
      
        pokeMoves[i] = data.moves[i].move.name;
        this.pokemoves[i]=data.moves[i].move.name;
    }

    // console.log(pokeName);
    // console.log(pokeImg);
    // console.log(this.pokeNum);
    // console.log(pokeType);
    // console.log(pokeStats);
    // console.log(pokeMoves);
    
    document.getElementById("pokeStatsHp").innerHTML = pokeStats[0];
    document.getElementById("pokeStatsAtk").innerHTML = pokeStats[1];
    document.getElementById("pokeStatsDef").innerHTML = pokeStats[2];
    document.getElementById("pokeStatsVel").innerHTML = pokeStats[5];
    
    document.getElementById("types").innerHTML = pokeType[0];
    document.getElementById("moves").innerHTML = pokeMoves[0];


    pokeImage(pokeImg);
    return this.pokeNum;
}

const pokeImage = (url) =>{
    const pokeImg =document.getElementById("pokeImg");
    pokeImg.src = url;
}

const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput= pokeName.value;
    console.log("Hola " + pokeInput);

}
const reset= () => {
    this.poketipos= [];
    this.pokemoves= [];
    document.getElementById("pokeStatsHp").innerHTML = '';
    document.getElementById("pokeStatsAtk").innerHTML = '';
    document.getElementById("pokeStatsDef").innerHTML = '';
    document.getElementById("pokeStatsVel").innerHTML = '';
    document.getElementById("types").innerHTML = 'Tipos';
    document.getElementById("moves").innerHTML = 'Movimientos';
    pokeImg =document.getElementById("pokeImg"); 
    pokeImg.src = 'img/pokeball.png';
    data = undefined;
    pokeName.value = '';
   
}

const left = () => {
    // apuntador === 0 ? apuntador = this.poketipos.length -1 : apuntador -= 1;
    if (apuntador === 0) {apuntador = this.poketipos.length -1}
    else{apuntador -= 1}
    document.getElementById("types").innerHTML = this.poketipos[apuntador];
    

    
}
const right = () => {
    apuntador2 === 0 ? apuntador2 = this.pokemoves.length -1 : apuntador2 -= 1;
    document.getElementById("moves").innerHTML = this.pokemoves[apuntador2];
}

const down= () => {
    pokeNum === 1 ? null : pokeNum -= 1;
    fetchPokemonId();
}

const up = () => {
    pokeNum === 898 ? null : pokeNum += 1;
    fetchPokemonId();
}