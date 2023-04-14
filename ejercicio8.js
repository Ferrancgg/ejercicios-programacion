///dado un numero entero , inviertelo y da de nuevo un numero entero


function reverseNumber(num){
    let ejecucion = parseInt(//esta la hacermos al final para para convertir un string en un numero//
                        num.toString()
                        .split('')
                        .reverse()
                        .join('')
                        )
                        *Math.sign(num) // una vez que tengo en numero vamos a tener en cuenta el signo que tiene para que el ejericio sea correcto;



    return ejecucion;



}
console.log("el numero invertido es",reverseNumber(-89))
