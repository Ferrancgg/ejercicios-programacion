//dibujar un cuadrado hueco por dentro con asteriscos dando el numero de asteriscos por lado.

function square(num){
   let lado= "";
   for (let i=0;i<num;i++){
    lado +="*"
   };
   let espacios= " "
   let numEspacios=num-2;
let numLineasIntermedias=num-2;
lineaIntemedia=0

   for (let j =0;j<numEspacios;j++){
    espacios
    lineaIntemedia=`*${espacios}*`;
   ;}

console.log (lineaIntemedia)


}

square(10)