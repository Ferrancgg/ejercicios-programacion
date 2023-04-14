///dados dos numeros devolver cuantos numeros impares hay entre ellos///
//////TENGO QUE REPETIRLO/////

// Mi respuesta al ejericicio

function oddNumbers(num1, num2){

    let counter=0;
    if(num1<num2){
        for(let i=num1; i<num2;i++){
        if(i%2!==0){
            counter+=1;
         console.log( `los numeros impares que hay entre ${num1} y ${num2} es ${counter}`)   
        }
    }else (console.log ("no poemos ejecutar la operacion"))


    }
    
    /////faltaria añadir el retur de counter

}

oddNumbers(5,50)



/////propuesta del curso


function impares( numero1,numero2){
    let contador=0
    while( numero1 < numero2){
        if (numero1%2 !==0)contador ++;
        numero1++;
    }
    return contador;
}
console.log ("numeros impares", impares(1,50))