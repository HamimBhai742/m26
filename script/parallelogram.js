function parallelogramArea(){
    const parallelogramBase=document.getElementById('parallelogram-base')
    const parallelogramBaseValue=parallelogramBase.value;
    const base=parseFloat(parallelogramBaseValue)
    console.log(parallelogramBaseValue);

    const parallelogramHeight=document.getElementById('parallelogram-height')
    const parallelogramHeightValue=parallelogramHeight.value;
    const height=parseFloat(parallelogramHeightValue)
    console.log(parallelogramHeightValue);

    const parallelogramArea=base*height;
    console.log(parallelogramArea);

    const outputArea=document.getElementById('area-calculation')
    const p=document.createElement('p')
    p.innerText='Parallelogram Area: '+parallelogramArea;
    const Out=outputArea.appendChild(p)
    Out.style.paddingLeft='10px'
    Out.style.marginTop='10px'
    Out.style.fontWeight='700'
    console.log(Out);
}