function converterCtoF(tempC) {
    const tempF = (tempC * 1.8) + 32
    console.log(`Temperatura = ${tempF} F`);
    /* o return retorna o que é desejado, neste caso a temp convertida que está na variável tempF */
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
    /* Exibe o resultado na tag que possui um id chamado resultado do HTML */
    document.getElementById('resultado').innerHTML = resultado;
}

converterCtoF(18)
converterCtoF(30)
