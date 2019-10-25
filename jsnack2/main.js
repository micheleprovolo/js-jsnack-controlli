//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

var word1 = prompt("Inserisci parola 1");

var word2 = prompt("Inserisci parola 2");

if (word1.length > word2.length){
        console.log(word2 + " " + word1);

} else if (word1.length < word2.length){
        console.log(word1 + " " + word2);

} else {
        console.log("sono uguali");
}
        