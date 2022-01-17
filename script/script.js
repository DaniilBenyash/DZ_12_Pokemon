class CreatePokemon {
    constructor(name,image,health,hunger,hygiene,depression,el){
        this.name = name;
        this.image = image;
        this.health = health;
        this.hunger = hunger;
        this.hygiene = hygiene;
        this.depression = depression;  
        this.el = el;
        
        this.methodCreatePokemon();
    }
    methodCreatePokemon(){
        const imagePokemon = this.el.querySelector('.imagePokemon');
        const health = this.el.querySelector('.health');
        const hunger = this.el.querySelector('.hunger');
        const hygiene = this.el.querySelector('.hygiene');
        const depression = this.el.querySelector('.depression');
        
        this.el.querySelector('.namePokemon').innerText = this.name;
        
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

                    this.el.querySelector('.plusHunger').style.display = 'none';
                    this.el.querySelector('.plusHygiene').style.display = 'none';
                    this.el.querySelector('.plusDepression').style.display = 'none';

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

        this.el.querySelector('.plusHunger').addEventListener('click',() => {
            hunger.value += 70;
        });
        this.el.querySelector('.plusHygiene').addEventListener('click',() => {
            hygiene.value += 70;
        });
        this.el.querySelector('.plusDepression').addEventListener('click',() => {
            depression.value += 70;
        });
    }
};

document.querySelector('.addPokemon').addEventListener('click',() => {
    const pokemon = document.querySelector('.pokemon').cloneNode(true);
    document.querySelector('body').append(pokemon);

    const random = Math.floor(Math.random() * arrPokemons.length);

    const create = new CreatePokemon(
        arrPokemons[random].name,
        arrPokemons[random].image,
        arrPokemons[random].health,
        arrPokemons[random].hunger,
        arrPokemons[random].hygiene,
        arrPokemons[random].depression,
        pokemon
        );
})