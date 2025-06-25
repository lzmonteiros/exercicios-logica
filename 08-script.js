let maçãs = Number (prompt("quantas maçãs você vai comprar?") )
let ValordaUnidade
let TotalBruto
let valordaconta

if(maçãs <= 12){
    ValordaUnidade = 0,30
}
if(maçãs >= 12){
    ValordaUnidade = 0,25
}

TotalBruto = maçãs * ValordaUnidade 

valordaconta = TotalBruto
alert ("o total da sua compra vai dar R$" = valordaconta)