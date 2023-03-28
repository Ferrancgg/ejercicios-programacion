/// dada una palabra , buscarla en una frase y devolver cuantas veces apararece en la frase ///

function palabrasEnFrase(frase, palabra){
    let palabraFrase=frase.toLowerCase()
                            .split(' ')
                            ;
    console.log (palabraFrase);
for(let i =0; i <palabraFrase.length;i++){
    let result={}
    if( palabraFrase[i]===palabra){
        result=palabra.push
    }
console.log(result)
}


}

palabrasEnFrase( "La casa de color azul no es mi casa", "color")