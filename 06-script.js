let idade = Number(prompt("Digite sua idade: "));

console.log(idade); //teste

if(idade < 16){
alert("você não pode votar!");
}

if(idade == 16 || idade == 17){
    alert("Você pode votar, mas não é obrigatório!");
}

if(idade >= 16 && idade <= 65){
    alert("Você é obrigado a votar!!");
}