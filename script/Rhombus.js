function rhombusArea() {
    // const rhombusD1=document.getElementById('rhombus-d1')
    // const rhombusD1Value=rhombusD1.value;
    // const d1=parseFloat(rhombusD1Value)
    // console.log(typeof d1);

    // const rhombusD2=document.getElementById('rhombus-d2')
    // const rhombusD2Value=rhombusD2.value;
    // console.log(rhombusD2Value);

    const d1 = inputFildById('rhombus-d1')
    // console.log(d1);
    const d2 = inputFildById('rhombus-d2')
    // console.log(d2);
    const Area = 0.5 * d1 * d2;
    const outputArea=document.getElementById('area-calculation')
    const p=document.createElement('p')
    p.innerText='Rhombus Area: '+Area
    const Out=outputArea.appendChild(p)
    Out.style.marginTop='10px'
    Out.style.paddingLeft='10px'
    Out.style.fontWeight='700'

}

function inputFildById(inputFileds) {
    const inputFiled = document.getElementById(inputFileds)
    const inputFildValue = inputFiled.value;
    const inputType=parseFloat(inputFildValue);
    return inputType;
}
