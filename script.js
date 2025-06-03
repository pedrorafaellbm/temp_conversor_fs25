function converterCtoF(tempC) {
    const tempF = (tempC * 1.8) + 32
    console.log(`Temperatura = ${tempF} F`);

    return tempF;
}

function convertCtoK(tempC) {
    
}

function converter() {
    console.log('Ei Clicou!');
    let tempC = document.getElementById('TempC').value
    console.log(`Temp °C: ${tempC}`);
    /* Chamando a função que converte de C para F*/
    const resultado = converterCtoF(tempC);

    document.getElementById('resultado').innerHTML = resultado;
}

converterCtoF(18)
converterCtoF(30)
