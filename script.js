var input = document.querySelector("#input-area")
var output = document.querySelector("#output-area")
var translateBtnPirate = document.querySelector("#btn-translate-pirate")
var translateBtnFerb = document.querySelector("#btn-translate-ferb")

var urlPirate = "https://api.funtranslations.com/translate/pirate.json"
var urlFerb = "https://api.funtranslations.com/translate/ferb-latin.json"

function translatedUrl(input, url) {
    var encodedURI = encodeURI(input)
    return `${url}?text=${encodedURI}`
}

function errorHandler(error) {
    console.log("Error Ocurred: " + error)
}

translateBtnPirate.addEventListener('click', () => {

    var inputTxt = input.value 
    var url = translatedUrl(inputTxt, urlPirate)
    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated
    })
    .catch(errorHandler)
    
})

translateBtnFerb.addEventListener('click', () => {

    var inputTxt = input.value 
    var url = translatedUrl(inputTxt, urlFerb)
    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated
    })
    .catch(errorHandler)
    
})




