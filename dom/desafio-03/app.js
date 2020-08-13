new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado() {
            return this.valor != 37 ? 'Valor Diferente' : 'Valor Igual'
            // return this.valor == 37 ? 'Valor Igual' : 'Valor Diferente'
            //             o valor é 37? se sim ^ porem, se nao ^
        }
    },
    watch: {
        valor() { //se o watch estiver monitorando o resultado, o contador de 5s se inicia após cada clique, se o watch receber o valor, o contador se inicia assim que o valor é alterado
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});