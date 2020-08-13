new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor1: ''
    },
    methods: {
        alertar() {
            alert('Oie')
        },
        pegarValor(event) {
            this.valor = event.target.value
        },
        pegarValor1(event) {
            this.valor1 = event.target.value
        }
    }
})