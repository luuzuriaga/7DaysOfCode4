function adivinaNumero() {
  const numeroSecreto = Math.floor(Math.random() * 11); // Número entre 0 y 10
  let intentos = 3;

  alert("¡Bienvenido al juego de adivinar el número! Tienes 3 intentos.");

  while (intentos > 0) {
    let intento = parseInt(prompt("Adivina un número entre 0 y 10:"));

    if (intento === numeroSecreto) {
      alert("🎉 ¡Felicidades! Has adivinado el número.");
      return;
    } else {
      intentos--;
      if (intentos > 0) {
        alert(`❌ Incorrecto. Te quedan ${intentos} intento(s).`);
      } else {
        alert(`😢 No adivinaste. El número era ${numeroSecreto}.`);
      }
    }
  }
}

adivinaNumero();
