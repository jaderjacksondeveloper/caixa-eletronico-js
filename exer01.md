// Aqui estamos "chamando" um módulo especial chamado 'readline'. 
// Ele nos permite ler o que o usuário digita no terminal (como se fosse o teclado de um caixa eletrônico).
const readline = require('readline');

// rl é a "interface" que vai controlar a entrada e a saída de informações no terminal.
// input: process.stdin -> é como se fosse o local de entrada (onde você digita).
// output: process.stdout -> é onde as mensagens aparecem no terminal (a tela).
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variável que guarda quanto dinheiro você tem no caixa eletrônico. Vamos começar com R$1000.
let saldo = 1000;

// Função menu() -> Essa função é como se fosse o "menu" que você vê ao acessar o caixa eletrônico.
// Mostra as opções: ver saldo, sacar, depositar, ou sair.
function menu() {
    console.log('\nSelecione a operação desejada:');
    console.log('1. Consultar saldo');
    console.log('2. Sacar dinheiro');
    console.log('3. Depositar dinheiro');
    console.log('4. Sair');

    // A função rl.question() faz uma pergunta e espera o usuário digitar uma resposta.
    // Depois que a resposta é digitada, ela chama outra função para processar o que foi digitado.
    rl.question('Escolha uma opção: ', (opcao) => {
        // Aqui estamos verificando qual foi a opção escolhida.
        switch (opcao) {
            case '1':  // Se a opção for '1', o saldo atual é exibido.
                console.log(`Seu saldo é: R$ ${saldo}`);
                // Depois de mostrar o saldo, o menu aparece novamente para mais opções.
                menu();
                break;

            case '2':  // Se a opção for '2', você pode sacar dinheiro.
                // O caixa eletrônico pergunta quanto você quer sacar.
                rl.question('Informe o valor para saque: ', (valor) => {
                    valor = parseFloat(valor); // Aqui convertemos o valor digitado para número.
                    
                    // Verifica se o valor que você quer sacar é maior do que o saldo disponível.
                    if (valor > saldo) {
                        console.log('Saldo insuficiente.');
                    } else {
                        // Se o saldo for suficiente, subtrai o valor sacado do saldo.
                        saldo -= valor;
                        console.log(`Saque realizado! Seu novo saldo é: R$ ${saldo}`);
                    }
                    // Depois de sacar (ou não), o menu aparece novamente.
                    menu();
                });
                break;

            case '3':  // Se a opção for '3', você pode depositar dinheiro.
                // O caixa eletrônico pergunta quanto você quer depositar.
                rl.question('Informe o valor para depósito: ', (valor) => {
                    valor = parseFloat(valor);  // Converte o valor digitado para número.
                    // O saldo é atualizado somando o valor depositado.
                    saldo += valor;
                    console.log(`Depósito realizado! Seu novo saldo é: R$ ${saldo}`);
                    // Depois de depositar, o menu aparece novamente.
                    menu();
                });
                break;

            case '4':  // Se a opção for '4', o usuário decide sair.
                console.log('Obrigado por usar o caixa eletrônico. Até logo!');
                // Fecha a interface, ou seja, encerra o programa.
                rl.close();
                break;

            default:  // Se o usuário digitar algo que não seja uma opção válida, aparece essa mensagem.
                console.log('Opção inválida, tente novamente.');
                // E o menu aparece de novo para que ele tente outra vez.
                menu();
        }
    });
}

// Para começar, chamamos a função menu(), que abre o caixa eletrônico e mostra as opções.
menu();
