const { createApp } = Vue;


createApp({
    data() {
        return {
            nome: '',
            cognome: '',
            eta: '',
            via: '',
        };
    },
    methods: {
        askData() {
            this.nome = prompt();
            this.cognome = prompt();
            this.eta = prompt();
            this.via = prompt();
        }
    },
    mounted() {
        this.askData()
    }
}).mount("#mytext");

