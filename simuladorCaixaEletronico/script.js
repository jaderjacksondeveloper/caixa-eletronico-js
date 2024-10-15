// Imagine que você tem uma carteira e começa com R$ 1000 guardados. 
// O "saldo" é o valor que você tem na sua carteira.
let saldo = 1000;

// Essa função aqui é o "consultarSaldo", ou seja, toda vez que você quiser 
// saber quanto tem na sua carteira, você chama essa função.
function consultarSaldo() {
    // Criamos uma mensagem especial para exibir o saldo, dizendo o quanto você tem.
    const mensagem = `Seu saldo é: R$ ${saldo}`;
    
    // Agora, vamos mostrar essa mensagem na tela, como se fosse um bilhete.
    exibirMensagem(mensagem);
}

// Aqui temos a função "sacarDinheiro". Imagine que você quer tirar dinheiro da sua carteira.
// Essa função pergunta quanto você quer sacar e depois faz as contas.
function sacarDinheiro() {
    // Usamos o "prompt" para pedir ao usuário que informe quanto ele quer tirar (sacar).
    const valor = parseFloat(prompt('Informe o valor para saque:'));
    
    // Agora, verificamos se você tem dinheiro suficiente na sua carteira.
    if (valor > saldo) {
        // Se você tentar tirar mais dinheiro do que tem, a função vai avisar:
        exibirMensagem('Saldo insuficiente.');
    } else {
        // Se o valor que você quer sacar for menor ou igual ao que você tem, ele subtrai do saldo.
        saldo -= valor;
        // Depois de tirar o dinheiro, ele avisa quanto ainda resta na sua carteira.
        exibirMensagem(`Saque realizado! Seu novo saldo é: R$ ${saldo}`);
    }
}

// Agora vem a função "depositarDinheiro". Essa função é usada quando você quer adicionar mais dinheiro 
// à sua carteira, como se alguém estivesse te pagando.
function depositarDinheiro() {
    // Aqui, você informa quanto quer depositar (adicionar à sua carteira).
    const valor = parseFloat(prompt('Informe o valor para depósito:'));
    
    // Esse valor será somado ao saldo que você já tem.
    saldo += valor;
    
    // Depois de adicionar o dinheiro, uma mensagem aparecerá informando o novo saldo.
    exibirMensagem(`Depósito realizado! Seu novo saldo é: R$ ${saldo}`);
}

// Finalmente, essa função "exibirMensagem" serve para mostrar as mensagens na tela do site.
// Imagine que é como se você estivesse escrevendo num quadro ou tela eletrônica.
function exibirMensagem(mensagem) {
    // Ela pega a área da tela chamada 'mensagem' e coloca a mensagem que queremos lá.
    document.getElementById('mensagem').innerText = mensagem;
}
