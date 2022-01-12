const section = document.querySelector('.section');
const pokemon = document.querySelector('.pokemon');
const addPokemon = document.querySelector('.addPokemon')

class CreatePokemon {
    constructor(name,image,health,hunger,hygiene,depression){
       const newPokemon = pokemon.cloneNode(true);
       section.append(newPokemon);
    
       newPokemon.childNodes[3].innerText = name;
       newPokemon.childNodes[1].style.backgroundImage = image;

       const character = newPokemon.childNodes[5];

       const hp = character.childNodes[1];
       hp.childNodes[3].value = health;
    
       const hr = character.childNodes[3];
       hr.childNodes[3].value = hunger;
        
       const he = character.childNodes[5];
       he.childNodes[3].value = hygiene;

       const dn = character.childNodes[7];
       dn.childNodes[3].value = depression;
    }
}

const Psyduck = {
    image: "url('../image/psyduck.png')",
    name: 'Псайдак',
    health: 100,
    hunger: 100,
    hygiene: 100,
    depression: 100,
}
const Bulbasaur = {
    image: "url('../image/bulbasaur.png')",
    name: 'Бульбазавр',
    health: 150,
    hunger: 150,
    hygiene: 150,
    depression: 150,
}
const Charmander = {
    image: "url('../image/charmander.png')",
    name: 'Чармандер',
    health: 160,
    hunger: 140,
    hygiene: 120,
    depression: 110,
}
const Squirtle = {
    image: "url('../image/squirtle.png')",
    name: 'Сквиртл',
    health: 140,
    hunger: 130,
    hygiene: 100,
    depression: 120,
}

const arrPokemons = [];
arrPokemons.push(Psyduck,Bulbasaur,Charmander,Squirtle)

addPokemon.addEventListener('click',() => {
    const random = Math.floor(Math.random() * arrPokemons.length)
    const create = new CreatePokemon(arrPokemons[random].name,arrPokemons[random].image,arrPokemons[random].health,arrPokemons[random].hunger,arrPokemons[random].hygiene,arrPokemons[random].depression)
})