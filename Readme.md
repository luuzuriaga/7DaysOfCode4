# 🎯 Juego: Adivina el Número - #7DaysOfCode4

Bienvenido al desafío de **#7DaysOfCode** 🎉. En este juego, tendrás que adivinar un número secreto entre 0 y 10. ¡Pero cuidado! Solo tienes **tres intentos** para lograrlo. 

## 🚀 ¿Cómo funciona?
1. El programa genera un número secreto aleatorio entre **0 y 10**.
2. El usuario tiene **3 oportunidades** para adivinarlo.
3. Si el usuario acierta, recibe un mensaje de felicitaciones. 🎉
4. Si falla, el programa indica cuántos intentos le quedan.
5. Si se agotan los intentos, se muestra el número correcto. 😢

## 🛠️ Tecnologías usadas
- **JavaScript**: para la lógica del juego.
- **`Math.random()`**: para generar el número aleatorio.
- **Estructuras de control (`while`, `if-else`)**: para manejar la interacción con el usuario.

## 📜 Código principal
```javascript
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