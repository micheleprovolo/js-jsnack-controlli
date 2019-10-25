//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var nomi = ["gino", "luca", "rino", "igor"];

var askUser = prompt("Come ti chiami?");

var trovato = false

for (i = 0; i < nomi.length; i++) {
        if(askUser === nomi[i]){
                trovato = true 
        }
}

if (trovato === true) {
        console.log("Sei in lista");
        
} else {
        console.log("Non sei in lista");
}
