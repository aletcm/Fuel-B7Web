/* JS code requested by index.html file; Javascript content to HTML code */

function formHandler(received) {
    received.preventDefault()

    let [getGasoline, getAlcohol] = received.target
    
    let setGasoline = getGasoline.value.replace(',', '.')
    let setAlcohol = getAlcohol.value.replace(',', '.')

    if(setAlcohol / setGasoline > 0.7) {
        document.getElementsByTagName('div')[3].classList.add('winner')
        showMessage('GASOLINA')
    } else {
        document.getElementsByTagName('div')[4].classList.add('winner')
        showMessage('ÁLCOOL')
    }
}

function showMessage(fuel) {
    document.getElementById('messages').innerHTML = "É mais vantajoso abastecer com "+fuel
}

function clearMessages() {
    let inputs = document.querySelectorAll('input')

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""
    }

    document.getElementById('messages').innerHTML = ""
    document.querySelectorAll('.winner').forEach(element => element.classList.remove('winner'))
}
