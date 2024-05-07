const BASE_URL = 'https://pokeapi.co/api/v2/';

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name);
        console.log(pokemon.id);
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);
    console.log(pokemon.id);
    createCard(pokemon);
})
// obtener el anterior
//
//
// obtener el siguiente
document.getElementById('previous-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = Math.max(1, currentPokeId -1);
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon.name);
    })

document.getElementById('next-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = currentPokeId + 1;
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon.name);
    })
 
    ////////////////// POST
//
/*fetch('https://jsonplaceholder.typicode.com/posts', {
   method: 'POST',
body: JSON.stringify({
       title: 'title1',
    body: 'Lorem ipsum dolor sit amet',
    userId: 1,
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
.then(json => console.log(json))*/

//Manipulacion del DOM
//CARDS

//Crear secciones
const CARDS_CONTAINER = document.querySelector("#card-container");
function createCard(){
    const cardPoke ={
        card: document.createElement("div"),
        name_selection: document.createElement("p"),
        id_selection:document.createElement("p"),
        weight_selection: document.createElement("p"),
    };
    return cardPoke;
}
//contedorCard.classList ="pokemon-card"
//contedorName.classList ="pokemon-name"
//contedorId.classList ="pokemon-id"

//Crear tarjetas e inyectamos la informacion
function injectData(card, pokemon){

card.name_selection.textContent = pokemon.name
card.id_selection.textContent = pokemon.id
card.weight_selection.textContent = pokemon.weigth
renderCard(pokemon);
}

function renderCard(cardPoke){
    const card =document.createElement("div")
    cardPoke.appendChild (
        cardPoke.card.name_selection,
        cardPoke.card.id_selection,
        cardPoke.card.weight_selection,
    );
    card.className = "div-creado";
    CARDS_CONTAINER.appendChild(card);
}




    









/* Manipular DOM y agregar una tarjeta del pokemon
El tamaño y la información de la tarjeta es a consideración personal. Al menos mostrar el nombre, id y peso del pokemon. Puntos extra si se muestra una imagen.
La tarjeta debe cargarse en pantalla aún si se cierra la ventana del navegador.
Para obtener la información recuerda localStorage y nuestro método asíncrono de Fetch
glhf;

 */