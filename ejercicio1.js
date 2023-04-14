// // ////dado un numero , devuelve su tabla de multiplicar//
//
 function multiplyTable(num){

     let table= `la tabla de multiplicar del ${num} es?`;
    for (let i =1; i<10;i++){
        let multiply= num*i;
        table +=` ${num}x${i}=${multiply}`
    }  return table

  } console.log(multiplyTable(5))







