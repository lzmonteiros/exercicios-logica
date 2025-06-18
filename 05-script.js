let dias = Number(prompt("Quantos dais: "))
let valordia
let totalBruto
let desconto10
let desconto15
let ValorDaConta

if(dias <= 5){
    valordia = 100

}
if(dias >= 6 && dias <= 10){
    valordia = 90
}
if(dias >= 11){
    valordia = 80
}
totalBruto = dias * valordia

desconto10 = totalBruto * 0.1

desconto15 = totalBruto * 0.15

ValorDaConta = totalBruto - desconto10 - desconto15 + 150


alert("Total Bruto R$" + totalBruto +
    "\ndesconto 1: R$" + desconto10 +
    "\ndesconto 2: R$" + desconto15 +
    "\nMulta R$150.00" +
    "\nValor da conta: R$" + ValorDaConta)

    