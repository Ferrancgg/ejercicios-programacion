///dado un numero entero , inviertelo y da de nuevo un numero entero


function reverseNumber(num){
    let ejecucion = parseInt(
                        num.toString()
                        .split('')
                        .reverse()
                        .join('')
                        );


    console.log(ejecucion)


}
console.log(ejecucion)

reverseNumber(55)