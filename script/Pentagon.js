function pentagonArea() {
    const peri = inputFildById('pentagon-perimeter')
    const apo = inputFildById('pentagon-apothem')
    const Area = 0.5 * peri * apo;

    const outputArea = document.getElementById('area-calculation')
    const p = document.createElement('p')
    p.innerText = 'Pentagon Area: ' + Area
    const Out = outputArea.appendChild(p)
    Out.style.marginTop = '10px'
    Out.style.paddingLeft = '10px'
    Out.style.fontWeight = '700'
}
function inputFildById(inputFileds) {
    const inputFiled = document.getElementById(inputFileds)
    const inputFildValue = inputFiled.value
    const inputType = parseFloat(inputFildValue)
    return inputType;
}