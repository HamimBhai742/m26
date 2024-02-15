function ellipseArea() {
    const a = inputFildById('ellipse-a')
    const b = inputFildById('ellipse-b')
    const Area = 3.1416 * a * b

    const outputArea = document.getElementById('area-calculation')
    const p = document.createElement('p')
    p.innerText = 'Ellipse Area: ' + Area.toFixed(2)
    const Out = outputArea.appendChild(p)
    Out.style.marginTop = '10px'
    Out.style.paddingLeft = '10px'
    Out.style.fontWeight = '700'
}
function inputFildById(inputFilds) {
    const inputFiled = document.getElementById(inputFilds)
    const inputFildValue = inputFiled.value
    const inputType = parseFloat(inputFildValue)
    return inputType
}