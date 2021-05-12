// fsrp01s1rj6y deck id

let url = 'https://deckofcardsapi.com/api/deck/fsrp01s1rj6y/draw/?count=1';

// axios.get(url)
//     .then(resp => {
//         console.log(`${resp.data.cards[0].value} of ${resp.data.cards[0].suit}`)
//         return axios.get(url)
//     })
//     .then(resp => {
//         console.log(`${resp.data.cards[0].value} of ${resp.data.cards[0].suit}`)
//         return axios.get(url)
//     })
//     .then(resp => {
//         console.log('IMAGE URL', resp.data.cards[0].image)
//         $('.card-container').append(`
//         <img src=${resp.data.cards[0].image}>`)
//     })
    
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
}