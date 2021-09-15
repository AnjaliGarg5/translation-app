var input = document.querySelector("#input-area")
var output = document.querySelector("#output-area")
var translateBtn = document.querySelector("#btn-translate")

var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json"

function translatedUrl(input) {
    var encodedURI = encodeURI(input)
    return `${serverUrl}?text=${encodedURI}`
}

function errorHandler(error) {
    console.log("Error Ocurred: " + error)
}

translateBtn.addEventListener('click', () => {
    var inputTxt = input.value 
    var url = translatedUrl(inputTxt)
    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(json => output.innerText = json.contents.translated)
    .catch(errorHandler)
})

