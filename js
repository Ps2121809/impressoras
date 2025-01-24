// Seleciona todos os elementos com a classe "impressora"
const impressoras = document.querySelectorAll(".impressora");

// Adiciona um evento de clique em cada impressora
impressoras.forEach((impressora) => {
  impressora.addEventListener("click", () => {
    // Alterna a classe "ativo" na impressora clicada
    impressora.classList.toggle("ativo");
  });
});
