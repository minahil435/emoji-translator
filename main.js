const submitButton = document.querySelector("#submit-button")
const inputText = document.querySelector("#translator-input")
const outputText = document.querySelector("#results")

submitButton.addEventListener("click", submitButtonPressed)

function submitButtonPressed() {
    const inputTextValue = inputText.value
    const radiosArray = document.querySelectorAll('[type="radio"]');
    for (const radio of radiosArray) {
        if (radio.checked) {

            if (radio.value === 'encode') {
                outputText.innerText = encode(inputTextValue)
            }
            else if (radio.value === 'translate') {
                outputText.innerText = translate(inputTextValue)
            }
            else if (radio.value === 'madlib') {
                outputText.innerText = madlib(inputTextValue)
            }
            else if (radio.value === 'search') {
                dosearch(inputTextValue)
            }
            else if (radio.value === 'random') {
                const selection = Math.floor(Math.random() * 4)
                if (selection === 0) {
                    outputText.innerText = encode(inputTextValue)
                }
                else if (selection === 1) {
                    outputText.innerText = translate(inputTextValue)
                }
                else if (selection === 2) {
                    outputText.innerText = madlib(inputTextValue)
                }
                else {
                    dosearch(inputTextValue)
                }
            }
        }
    }
}

function dosearch(inputTextValue) {
    const emojiArray = search(inputTextValue)
    outputText.innerText = ""
    if (emojiArray.length === 0) { outputText.innerText = "No emojis found"; return }
    for (const emoji of emojiArray) {
        let para = document.createElement("p");
        outputText.appendChild(para);
        para.innerText = emoji.symbol
    }
}