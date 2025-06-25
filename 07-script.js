let altura = Number(prompt("Qual sua altura: "))
let peso
let genero = (prompt("Qual seu gênero: "))
 

if(genero == "feminino"){
    peso = (62.1 * altura - 44.7)
}else{
    if (genero == "masculino")
        peso = (72.7 * altura - 58)
}
alert (peso)