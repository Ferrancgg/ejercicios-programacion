/////¿Cual es el x por ciento de un numero determinado?

function percent(num1, num2){

    let result =0;
    let percentNum1=num1/100;
    result=percentNum1*num2;
    console.log (result)

    return console.log(`El ${num1} % del numero ${num2} es =${result}`)
    
}
percent(20,50)
