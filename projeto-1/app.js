new Vue({
  el: ".container",
  data: {
    playerLife: 100,
    monsterLife: 100,
    running: false,
    cooldownSpAtk: 0,
    cooldownHeal: 0,
    logs: [],
    origem: "",
    alvo: "",
    amount: 0,
  },
  computed: {
    endGame() {
      return this.playerLife == 0 || this.monsterLife == 0; //bulir aqui se der merda nos numeros negativos
      this.running = false;
    },
  },
  methods: {
    startGame() {
      this.running = true;
      this.playerLife = 100;
      this.monsterLife = 100;
      this.cooldownSpAtk = 0;
      this.cooldownHeal = 0;
    },
    atacar(alvo, origem, amount) {
      this.amount = this.monsterLife -= this.getRandomInt(5, 9);
      this.origem = "jogador";
      this.alvo = "monstro";
      console.log(alvo);
      this.playerLife -= this.getRandomInt(7, 11);
      this.playerLife = Math.max(this.playerLife, 0);
      this.monsterLife = Math.max(this.monsterLife, 0);
      this.cooldownSpAtk--;
      this.cooldownSpAtk = Math.max(this.cooldownSpAtk, 0);
      this.cooldownHeal--;
      this.cooldownHeal = Math.max(this.cooldownHeal, 0);
    },
    spAtk() {
      this.monsterLife -= this.getRandomInt(9, 15);
      this.playerLife -= this.getRandomInt(7, 11);
      this.playerLife = Math.max(this.playerLife, 0);
      this.monsterLife = Math.max(this.monsterLife, 0);
      if (this.cooldownSpAtk == 0) {
        this.cooldownSpAtk = 3;
      }
    },
    heal() {
      this.playerLife += this.getRandomInt(10, 15);
      this.playerLife -= this.getRandomInt(7, 11);
      this.playerLife = Math.max(this.playerLife, 0);
      this.playerLife = Math.min(100, this.playerLife);
      this.monsterLife = Math.max(this.monsterLife, 0);
      if (this.cooldownHeal == 0) {
        this.cooldownHeal = 2;
      }
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls });
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
  },
  watch: {},
});
