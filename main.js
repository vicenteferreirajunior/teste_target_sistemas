// Questao número 1
function indice() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    document.getElementById('resultado1').textContent = `O valor final da variável SOMA é ${SOMA}.`;
}

// Questão número 2
function Fibonacci() {
    const numero = parseInt(document.getElementById('fibNumero').value);
    const mensagem = document.getElementById('resultado2');
    
    if (isNaN(numero) || numero < 0) {
        mensagem.textContent = "Por favor, insira um número positivo.";
        return;
    }
    
    function pertenceFibonacci(num) {
        let a = 0;
        let b = 1;
        
        if (num === a || num === b) return true;
        
        while (b < num) {
            let temp = a;
            a = b;
            b = temp + b;
        }
        
        return b === num;
    }
    
    if (pertenceFibonacci(numero)) {
        mensagem.textContent = `${numero} pertence à sequência de Fibonacci.`;
    } else {
        mensagem.textContent = `${numero} não pertence à sequência de Fibonacci.`;
    }
}

// Questão numero 3
function Faturamento() {
    const jsonInput = document.getElementById('faturamentoJson').value;
    const dados = JSON.parse(jsonInput);
    
    if (!Array.isArray(dados) || dados.length === 0) {
        document.getElementById('resultado3').textContent = "Dados inválidos ou vazio.";
        return;
    }

    const valores = dados.map(dia => dia.valor).filter(valor => valor > 0);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;
    const diasAcimaMedia = valores.filter(valor => valor > media).length;

    document.getElementById('resultado3').innerHTML = `
        Menor valor de faturamento: R$${menorValor.toFixed(2)}<br>
        Maior valor de faturamento: R$${maiorValor.toFixed(2)}<br>
        Número de dias acima da média: ${diasAcimaMedia}
    `;
}

// Questão número 4 
function Percentual() {
    const faturamentos = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const total = Object.values(faturamentos).reduce((acc, val) => acc + val, 0);
    const percentual = {};

    for (const estado in faturamentos) {
        percentual[estado] = ((faturamentos[estado] / total) * 100).toFixed(2) + '%';
    }

    document.getElementById('resultado4').innerHTML = `
        SP: ${percentual.SP}<br>
        RJ: ${percentual.RJ}<br>
        MG: ${percentual.MG}<br>
        ES: ${percentual.ES}<br>
        Outros: ${percentual.Outros}
    `;
}

// Questao número 5
function inverterCaractere() {
    const str = document.getElementById('stringInput').value;
    const resultado = str.split('').reverse().join('');
    document.getElementById('resultado5').textContent = `String invertida: ${resultado}`;
} 