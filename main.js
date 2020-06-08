function checaIdade(idade){
    return new Promise(function(resolve, reject) {
        if(idade > 18){
            resolve("Maior que 18");
        }else{
            reject("Menor que 18");
        }
    });
}

 checaIdade(15)
    .then(function(maior) {
        console.log(maior);
    })
    .catch(function(menor) {
        console.log(menor);
});