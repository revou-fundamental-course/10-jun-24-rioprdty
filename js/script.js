let CelsiusToFahrenheit = true;

function konversi() {
  const inputTemp = document.getElementById("celsius").value;
  let fahrenheit, calculation;

  if (CelsiusToFahrenheit) {
    fahrenheit = (inputTemp * 9) / 5 + 32;
    calculation = `${inputTemp}°C * (9 / 5) + 32 = ${fahrenheit.toFixed(2)}°F`;
  } else {
    fahrenheit = ((inputTemp - 32) * 5) / 9;
    calculation = `${inputTemp}°F - 32 * (5 / 9) = ${fahrenheit.toFixed(2)}°C`;
  }

  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  document.getElementById("caraKalkulasi").innerText = calculation;
}

function reset() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("caraKalkulasi").innerText = "";
}

function reverse() {
  CelsiusToFahrenheit = !CelsiusToFahrenheit;
  const labelCelsius = document.getElementById("labelCelsius");
  const labelFahrenheit = document.getElementById("labelFahrenheit");

  if (CelsiusToFahrenheit) {
    labelCelsius.innerText = "Celsius (°C):";
    labelFahrenheit.innerText = "Fahrenheit (°F):";
  } else {
    labelCelsius.innerText = "Fahrenheit (°F):";
    labelFahrenheit.innerText = "Celsius (°C):";
  }

  const celsius = document.getElementById("celsius").value;

  if (celsius) {
    konversi();
  } else {
    reset();
  }
}
