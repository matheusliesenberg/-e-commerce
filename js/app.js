const { createApp } = Vue;

createApp({
  data() {
    return {
      personagens: [
        { nome: "Brock", tipo: "Pedra", imagem: "assets/image/brock.jpeg", preco: 10, selecionado: false },
        { nome: "Misty", tipo: "Água", imagem: "assets/image/misty.jpeg", preco: 12, selecionado: false },
        { nome: "Erika", tipo: "Planta", imagem: "assets/image/erika.jpeg", preco: 15, selecionado: false },
        { nome: "Lt. Surge", tipo: "Elétrico", imagem: "assets/image/surge.jpeg", preco: 14, selecionado: false },
        { nome: "Sabrina", tipo: "Psíquico", imagem: "assets/image/sabrina.jpeg", preco: 18, selecionado: false },
        { nome: "Koga", tipo: "Venenoso", imagem: "assets/image/koga.jpeg", preco: 13, selecionado: false },
        { nome: "Blaine", tipo: "Fogo", imagem: "assets/image/blaine.jpeg", preco: 16, selecionado: false },
        { nome: "Giovanni", tipo: "Terra", imagem: "assets/image/giovanni.jpeg", preco: 20, selecionado: false },
        { nome: "Whitney", tipo: "Normal", imagem: "assets/image/whitney.jpeg", preco: 11, selecionado: false },
        { nome: "Roxie", tipo: "Venenoso", imagem: "assets/image/roxie.jpeg", preco: 9, selecionado: false }
      ]
    };
  },
  computed: {
    totalCarrinho() {
      return this.personagens
        .filter(p => p.selecionado)
        .reduce((total, p) => total + p.preco, 0);
    }
  },
  methods: {
    toggleSelecionado(personagem) {
      personagem.selecionado = !personagem.selecionado;
    }
  }
}).mount('#app');
