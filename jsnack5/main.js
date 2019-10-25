

var arrayVuoto = [];

for (i = 0; i < 6; i++) {
        var askUser = prompt("Inserisci un numero");
        if (askUser % 2 != 0) {
                arrayVuoto.push(askUser);
                   
        }
      }

console.log(arrayVuoto);
     