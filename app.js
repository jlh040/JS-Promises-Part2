// fsrp01s1rj6y deck id
let url = 'https://deckofcardsapi.com/api/deck/fsrp01s1rj6y/draw/?count=1';
    
$('button').click(function(e) {
    getCardImageURL()
})

function getCardImageURL() {
    axios.get(url)
        .then(resp => {
            imageURL = resp.data.cards[0].image;
            putCardOnPage(imageURL)
        })
}

function putCardOnPage(url) {
    $('.card-container').append(`
    <img src=${imageURL}>
    `)
    rotateAndMoveCard(imageURL)
}

function rotateAndMoveCard(imageURL) {
    $(`img[src="${imageURL}"]`)
        .css({
            'transform': `rotate(${randomRotateValue()}deg) translateX(${randomPixel()}px)`,
        })
}

function randomRotateValue() {
    return Math.floor(Math.random() * 181);
}

function randomPixel() {
    return Math.floor(Math.random() * 5);
}