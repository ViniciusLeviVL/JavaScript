let num = [1,2,5,3,9]

let tam = num.length
console.log (`O array tem ${tam} casas que são: ${num}`)
for (let pos = 0 ; pos < num.length ; pos++){
    console.log (`A casa ${pos} tem o valor ${num[pos]}`)
}

/*     */

for (pos in num){ // Este comando só funciona com arrays
    console.log (`A casa ${pos} tem o valor ${num[pos]}`)
}
