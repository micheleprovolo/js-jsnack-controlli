//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

var arrayVuoto = [];

for (i = 0; i < 6; i++) {
        var askUser = prompt("Inserisci un numero");

        if (askUser % 2 != 0) {
                arrayVuoto.push(askUser);
        }
      }

console.log(arrayVuoto);
     