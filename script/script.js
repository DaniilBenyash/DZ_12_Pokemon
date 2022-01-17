<<<<<<< HEAD
class CreatePokemon {
    constructor(name,image,health,hunger,hygiene,depression){
        this.name = name;
        this.image = image;
        this.health = health;
        this.hunger = hunger;
        this.hygiene = hygiene;
        this.depression = depression;  

        this.methodCreatePokemon();
    }
    methodCreatePokemon(){
        const pokemon = document.querySelector('.pokemon').cloneNode(true);

        document.querySelector('body').append(pokemon);

        const imagePokemon = pokemon.querySelector('.imagePokemon');
        const health = pokemon.querySelector('.health');
        const hunger = pokemon.querySelector('.hunger');
        const hygiene = pokemon.querySelector('.hygiene');
        const depression = pokemon.querySelector('.depression');
        
        pokemon.querySelector('.namePokemon').innerText = this.name;
        
        imagePokemon.style.backgroundImage = this.image;

        health.max = this.health;
        health.value = this.health;

        hunger.max = this.hunger;
        hunger.value = this.hunger;

        hygiene.max = this.hygiene;
        hygiene.value = this.hygiene;

        depression.max = this.depression;
        depression.value = this.depression;

        const timer = setInterval(() => {

            hunger.value -= Math.random() * 0.1;
            hygiene.value -= Math.random() * 0.1;
            depression.value -= Math.random() * 0.1;

            if(hunger.value  === 0 ||hygiene.value === 0 ||depression.value === 0 ){

                health.value -= 0.1;
                imagePokemon.style.backgroundColor = '#c45a5ad7';

                if(health.value === 0){

                    imagePokemon.style.backgroundImage = "url('../image/rip.png')";
                    imagePokemon.style.backgroundSize = '100% 100%';
                    imagePokemon.style.backgroundColor = '#616161d7';

                    pokemon.querySelector('.plusHunger').style.display = 'none';
                    pokemon.querySelector('.plusHygiene').style.display = 'none';
                    pokemon.querySelector('.plusDepression').style.display = 'none';

                    hunger.value = 0;
                    hygiene.value = 0;
                    depression.value = 0;

                    clearInterval(timer);
                }
            }

            else if(hunger.value > 0 && hygiene.value > 0 && depression.value > 0){

                health.value += 0.1;
                imagePokemon.style.backgroundColor = '#5ee491d7';
            }
        }, 10);

        pokemon.querySelector('.plusHunger').addEventListener('click',() => {
            hunger.value += 70;
        });
        pokemon.querySelector('.plusHygiene').addEventListener('click',() => {
            hygiene.value += 70;
        });
        pokemon.querySelector('.plusDepression').addEventListener('click',() => {
            depression.value += 70;
        });
    }
};

document.querySelector('.addPokemon').addEventListener('click',() => {
    
    const random = Math.floor(Math.random() * arrPokemons.length);

    const create = new CreatePokemon(
        arrPokemons[random].name,
        arrPokemons[random].image,
        arrPokemons[random].health,
        arrPokemons[random].hunger,
        arrPokemons[random].hygiene,
        arrPokemons[random].depression,
        );
=======
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
>>>>>>> e7e02a440bbfa57955c79237a2ff76326858058f
})