const { createApp } = Vue;

// const nome = prompt("Inserisci il tuo nome");
// const cognome = prompt("Inserisci il tuo cognome");
// const eta = prompt("Inserisci la tua eta");
// const via = prompt("Inserisci la via dove abiti");

createApp({
    data(){
        return{
            nome:`mario`,
            cognome:`rossi`,
            eta:`60`,
            via:`XX Settembre`,
        }
    }

}).mount(`#mytext`)