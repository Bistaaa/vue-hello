const { createApp } = Vue;

function insertData() {
  const nome = prompt("Inserisci il tuo nome");
  const cognome = prompt("Inserisci il tuo cognome");
  const eta = prompt("Inserisci la tua età");
  const via = prompt("Inserisci la via dove abiti");

  createApp({
    data() {
      return {
        nome: nome,
        cognome: cognome,
        eta: eta,
        via: via,
      };
    },
  }).mount("#mytext");
}

insertData();
