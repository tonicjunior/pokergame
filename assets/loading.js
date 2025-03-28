// Tela de Loading Medieval
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const loadingBar = document.getElementById("loading-bar");
  const loadingText = document.getElementById("loading-text");
  const loadingTip = document.getElementById("loading-tip");

  // Dicas medievais aleatórias
  const tips = [
    "Um bom cavaleiro conhece tanto sua espada quanto seu coração",
    "A batalha é vencida antes mesmo de ser travada",
    "O dragão dorme, mas o guerreiro permanece vigilante",
    "Na armadura da honra, não há espaço para a covardia",
    "A vitória pertence aos que perseveram",
    "O verdadeiro poder está no controle da própria mente",
  ];

  // Simula o carregamento com progresso
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;
    loadingBar.style.width = `${progress}%`;

    // Atualiza mensagens conforme o progresso
    if (progress < 25) {
      loadingText.textContent = "Forjando armaduras...";
    } else if (progress < 50) {
      loadingText.textContent = "Afiando espadas...";
      loadingTip.textContent = tips[Math.floor(Math.random() * tips.length)];
    } else if (progress < 75) {
      loadingText.textContent = "Convocando guerreiros...";
    } else {
      loadingText.textContent = "Pronto para a batalha!";
    }

    // // Quando completar
    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
          loadingScreen.classList.add("hidden");
        }, 1500);
      }, 1000);
    }
  }, 400);
});
