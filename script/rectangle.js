function rectangleArea(){

   const rectangleWidght=document.getElementById('rectangle-widght')
   const rectangleWidghtValue=rectangleWidght.value;
   const widght=parseFloat(rectangleWidghtValue)
   console.log(widght);

   const rectangleLength=document.getElementById('rectangle-length')
   const rectangleLengthValue=rectangleLength.value;
   const length=parseFloat(rectangleLengthValue)
   console.log(length);

   const rectangleArea=widght*length;
   console.log(rectangleArea);

   const outputArea=document.getElementById('area-calculation')
   const p=document.createElement('p')
   p.innerText='Rectangle Area: '+rectangleArea;
   const Out=outputArea.appendChild(p)
   Out.style.fontWeight='700'
   Out.style.paddingLeft='10px'
   Out.style.marginTop='10px'
}