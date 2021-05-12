// fsrp01s1rj6y deck id
let deckID;
let deckURL;

$(function() {
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(resp => {
            deckID = resp.data.deck_id;
            return deckID;
        })
        .then(deckID => {
            deckURL = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`;
        });
});
    
$('button').click(function(e) {
    getCardImageURL();
});

function getCardImageURL() {
    axios.get(deckURL)
        .then(resp => {
            if (checkForEmptyDeck(resp)) return;
            imageURL = resp.data.cards[0].image;
            putCardOnPage(imageURL);
        });
};

function putCardOnPage(url) {
    $('.card-container').append(`
    <img src=${imageURL}>
    `)
    rotateAndMoveCard(imageURL);
};

function rotateAndMoveCard(imageURL) {
    $(`img[src="${imageURL}"]`)
        .css({
            'transform': `rotate(${randomRotateValue()}deg) translateX(${randomPixel()}px)`,
        });
};

function randomRotateValue() {
    return Math.floor(Math.random() * 181);
};

function randomPixel() {
    return Math.floor(Math.random() * 50);
};

function checkForEmptyDeck(resp) {
    if ('error' in resp.data) {
        $('.heading-container')
            .html('<h1 class="display-4">No more cards!</h1>')
        
        return true;
    };
};