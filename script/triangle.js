function triangleCalculate() {
    //Base Scetion
    const triangleBase = document.getElementById('triangle-base')
    const triangleBaseValue = triangleBase.value;
    const base = parseFloat(triangleBaseValue)
    // console.log(base);
    //Height Section
    const triangleHeight = document.getElementById('triangle-height')
    const triangleHeightValue = triangleHeight.value;
    const height = parseFloat(triangleHeightValue);
    // console.log(height);

    const triangleArea = 0.5 * base * height;
    console.log(triangleArea);


    const trianagleValueOut = document.getElementById('area-calculation');
    const p = document.createElement('p')
    p.innerText = 'Triangle Area: '+triangleArea;
    const Out = trianagleValueOut.appendChild(p)
    Out.style.marginTop='10px'
    Out.style.paddingLeft = '10px'
    Out.style.fontWeight='700'
    console.log(Out);
}