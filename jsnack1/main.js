//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var user1 = parseInt(prompt("inserisci numero uno"));
var user2 = parseInt(prompt("inserisci numero due"));


if (user1 > user2){
    console.log(user1);

} else if (user1 < user2){
        console.log(user2); 
        
} else{
        console.log("parità")
}
    
