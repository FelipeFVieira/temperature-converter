function convert() {
    var resultado = 0;
    var celcius;
    var fahrenheit;

    celcius = document.getElementById("celcius").value;
    fahrenheit = celcius * 1.8 + 32;
    document.getElementById("resultado").value = fahrenheit;
  }