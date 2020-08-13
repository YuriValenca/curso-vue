new Vue({
    el: '#desafio',
    data: {
        nome: 'Yuri',
        idade: 22,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        multIdade: function(){
            return this.idade*3;
        },
        funcRandom: function(){
            return Math.random(0, 1);
        }
        
    }
})