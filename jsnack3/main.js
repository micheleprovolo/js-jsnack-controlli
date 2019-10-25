//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.


var somma = 0; //per dire che è un numero

for (i = 0; i < 5; i++) {
        var numero = parseInt(prompt("Scrivi un un numero"));
        console.log(numero);
        somma = somma + numero; //somma += numero
}

console.log(somma);

// i = 0;
// while (i < 5) {
//         console.log() ;
//         i++;
// }