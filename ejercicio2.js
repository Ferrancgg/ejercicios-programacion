////dado una cadena de texto comprobar si es un plidromo///
//ejemplo: ana

function polindromo(string){
  

    let palabraInvertida= string.split('')
                                .reverse()
                                .join('');
    
      if ( string === palabraInvertida){
    
        return true;
     }else {
        return false;}
}                   


console.log( `es un polidromo la palabra: ` + polindromo("ana"))
////////



