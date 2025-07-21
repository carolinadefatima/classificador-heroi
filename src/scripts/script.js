document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const xp = parseInt(document.getElementById("xp").value);
  const resultado = document.getElementById("resultado");

  let nivel = "";

  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  resultado.innerHTML = `O Herói de nome <strong>${nome}</strong> está no nível de <strong>${nivel}</strong>!`;
  resultado.classList.remove("hidden");
});
