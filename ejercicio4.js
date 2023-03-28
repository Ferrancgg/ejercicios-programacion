


function turnAround(string){
    
    let word=string.toLowerCase()
            .split('')
            .reverse()
            .join('');

            console.log (word)

            if(word === string){
                 console.log( `esta palabra es un palindromo`)
            }
            else{ console.log(`esta palagra no es un palindromo`)};

}

turnAround("ana")


/////////////

function texto( text){
    let turnText=text.map()
    console.log(turnText)
}

texto("casa")