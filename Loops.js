//1

function filtrarnums() {
    const cant = parseInt(document.getElementById("cantidad").value, 10);
    const nPares = [];

    for (let i = cant; i >= 0; i--) {
        if (i % 2 === 0) {
            nPares.push(i);
        }
    }

    // Mostrar los números pares en el HTML
    const resultadoDiv = document.getElementById("pares");
    resultadoDiv.innerHTML = `Números pares encontrados: ${nPares.join(", ")}`;
}

//2

function buscarPrimos() {


    let n1 = parseInt(document.getElementById("nMenor").value, 10);
    let n2 = parseInt(document.getElementById("nMayor").value, 10);
    let menor = Math.min(n1, n2);
    let mayor = Math.max(n1, n2);
    const nPrimos = [];
    let num = menor;

    do {
        if (esPrimo(num)) {
            nPrimos.push(num);
        }
        num++;
    } while (num <= mayor);


    const resDiv = document.getElementById("primos");
    resDiv.innerHTML = `Números primos en el rango dado: ${nPrimos.join(", ")}`;

}

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

//3
function generarPatron() {
    const numeroInput = document.getElementById('numero');
    const n = parseInt(numeroInput.value, 10);

    let patron = '';
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        if (j > n) {
          break; 
        }
        patron += j + ' ';
      }
      patron += '<br>'; 
    }

    const patronDiv = document.getElementById('patron');
    patronDiv.innerHTML = patron;
  }

  //4
  function calcularSuma() {
    const numeroInput = document.getElementById('numero');
    const sumaDiv = document.getElementById('suma');
    let suma = 0;
    let validar = true;
    
    while (validar == true) {
      const numero = parseInt(numeroInput.value, 10);  
      
      if (numero <= 0) {
        validar = false;
      } else {
        suma += numero;
      }

      numeroInput.value = ''; 
    }
    
    sumaDiv.innerHTML = `La suma total es: ${suma}`;
  }