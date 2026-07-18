let currentlyShowingAmount = 0;
let maxIndex = 29;
let currentList = [];

const typeColors = {
    'normal': '#BCBCAC',
    'fighting': '#BC5442',
    'flying': '#669AFF',
    'poison': '#AB549A',
    'ground': '#DEBC54',
    'rock': '#BCAC66',
    'bug': '#ABBC1C',
    'ghost': '#6666BC',
    'steel': '#ABACBC',
    'fire': '#FF421C',
    'water': '#2F9AFF',
    'grass': '#78CD54',
    'electric': '#FFCD30',
    'psychic': '#FF549A',
    'ice': '#78DEFF',
    'dragon': '#7866EF',
    'dark': '#785442',
    'fairy': '#FFACFF',
    'shadow': '#0E2E4C'
};

const typeTranslations = {
    'normal': 'Normal',
    'fighting': 'Dövüş',
    'flying': 'Uçan',
    'poison': 'Zehir',
    'ground': 'Yer',
    'rock': 'Kaya',
    'bug': 'Böcek',
    'ghost': 'Hayalet',
    'steel': 'Çelik',
    'fire': 'Ateş',
    'water': 'Su',
    'grass': 'Çimen',
    'electric': 'Elektrik',
    'psychic': 'Psişik',
    'ice': 'Buz',
    'dragon': 'Ejderha',
    'dark': 'Karanlık',
    'fairy': 'Peri',
    'shadow': 'Gölge'
};

/**update pokemon list to */
function updatePokemonList() {
    if (currentlyShowingAmount <= maxIndex) {
        renderPokemonListItem(currentlyShowingAmount);
    };
};

/**render */
function renderPokemonListItem(index) {
    if (currentList[index]) {
        document.getElementById('pokebook-list-render-container').insertAdjacentHTML('beforeend', `<div onclick="openInfo(${currentList[index].id})" class="pokemon-render-result-container container center column">
                                                                                                    <img class="search-pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentList[index].id}.png">
                                                                                                    <span class="bold font-size-12">No. ${currentList[index].id}</span>
                                                                                                    <h3>${dressUpPayloadValue(currentList[index].name)}</h3>
                                                                                                    ${getTypeContainers(currentList[index].types)}
                                                                                                </div>`);

        currentlyShowingAmount += 1;

        updatePokemonList();
    };
};

function increaseMaxIndex(by) {
    if (maxIndex + by <= currentList.length) {
        maxIndex += by;
    } else {
        maxIndex = currentList.length - 1;
    };
};

/**get type containers for pokemon infos */
function getTypeContainers(typesArray) {
    let htmlToReturn = '<div class="row">';

    for (let i = 0; i < typesArray.length; i++) {
        const typeNameEn = typesArray[i].toLowerCase();
        const typeNameTr = typeTranslations[typeNameEn] || dressUpPayloadValue(typesArray[i]);
        htmlToReturn += `<div class="type-container" style="background: ${typeColors[typesArray[i]]};">
                                ${typeNameTr}
                            </div>`;
    };

    return htmlToReturn + '</div>';
};

/**on search input keydown*/
function search() {
    setTimeout(function () {
        let searchResults = [];

        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].name) {
                if (pokemons[i].name.replaceAll('-', ' ').includes(document.getElementById('search-input').value.toLowerCase())) {
                    searchResults.push(pokemons[i]);
                };
            };
        };

        document.getElementById('pokebook-list-render-container').innerHTML = '';

        currentList = searchResults;
        currentlyShowingAmount = 0;
        maxIndex = 0;

        increaseMaxIndex(30);
        updatePokemonList();
    }, 1);
};


/** Scroll */
window.addEventListener('scroll', function () {
    addNewScrollPokemon();
    updateBackToTopVisibility();
});

/**add new scroll pokemon when bottom is reached */
function addNewScrollPokemon() {
    if (window.scrollY + 100 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
        increaseMaxIndex(30);
        updatePokemonList();
    };
};

/**make back to top button visible */
function updateBackToTopVisibility() {
    if(window.scrollY > window.innerHeight) {
        document.getElementById('back-to-top-button').classList.remove('hide');
    } else {
        document.getElementById('back-to-top-button').classList.add('hide');
    };
};

function backToTop() {
    window.scrollTo(0, 0);
};


/**dress up payload value */
function dressUpPayloadValue(string) {
    let splitStr = string.toLowerCase().split('-');
    for (let i = 0; i < splitStr.length; i++) {
        let word = splitStr[i];
        if (word) {
            let first = word.charAt(0);
            if (first === 'i') first = 'İ';
            else if (first === 'ı') first = 'I';
            else first = first.toUpperCase();
            splitStr[i] = first + word.substring(1);
        }
    };
    return splitStr.join(' ');
};