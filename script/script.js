const section = document.querySelector('.section');
const pokemon = document.querySelector('.pokemon');
const addPokemon = document.querySelector('.addPokemon');

class CreatePokemon {
    constructor(name,image,health,hunger,hygiene,depression){
        this.name = name;
        this.image = image;
        this.health = health;
        this.hunger = hunger;
        this.hygiene = hygiene;
        this.depression = depression;  
    }
    methodCreatePokemon(){
        const newPokemon = pokemon.cloneNode(true);
        section.append(newPokemon);
        
        newPokemon.childNodes[3].innerText = this.name;
        newPokemon.childNodes[1].style.backgroundImage = this.image;

        const character = newPokemon.childNodes[5];

        const hp = character.childNodes[1];
        hp.childNodes[3].max = this.health;
        hp.childNodes[3].value = this.health;

        const hr = character.childNodes[3];
        hr.childNodes[3].max = this.hunger;
        hr.childNodes[3].value = this.hunger;
        
        const he = character.childNodes[5];
        he.childNodes[3].max = this.hygiene;
        he.childNodes[3].value = this.hygiene;

        const dn = character.childNodes[7];
        dn.childNodes[3].max = this.depression;
        dn.childNodes[3].value = this.depression;
       
    }
};

addPokemon.addEventListener('click',() => {
    const random = Math.floor(Math.random() * arrPokemons.length);
    const create = new CreatePokemon(arrPokemons[random].name,arrPokemons[random].image,arrPokemons[random].health,arrPokemons[random].hunger,arrPokemons[random].hygiene,arrPokemons[random].depression);
    create.methodCreatePokemon();
})