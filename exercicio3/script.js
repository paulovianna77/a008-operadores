const operacao1 = 5 > 20 && 20 <2
const operacao2 = 5 === 5 || 5 === "5"
const operacao3 = !20 > 50
const operacao4 = !( 20 > 50)



console.log(operacao1)
/* false, porque cinco não é maior que vinte e vinte não é manor que dois, temos consequentimente
false && false, que retorna false */
console.log(operacao2)
/* true, porque cinco number é igual a cinco number, consequentemente retornando true, pois é uma das opções */
console.log(operacao3)
/* false, porque 20 não é maior do que 50, consequentemente temos false */
console.log(operacao4)
/* true, porque 20 maior que 50 retorna false, consequentemente eu nego o false com outro false 
me retornando true */



