// Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **ou** por 3.
    
// Faça isso:
    
// **a)** Utilizando ifs aninhados

const numero = Number(prompt(`Digite um número, por favor`))

if (numero % 2 === 0) {
    if (numero % 3 === 0) {
        console.log(`O número ${numero} é Divisível por 2 e por 3.`)
    } else {
         console.log(`O numero ${numero} não é divisível por 2 e por 3.`)
    }
} else {
    console.log(`O numero ${numero} não é divisível por 2 e por 3.`)
}

// **b)** Utilizando um operador lógico para unir duas operações relacionais

