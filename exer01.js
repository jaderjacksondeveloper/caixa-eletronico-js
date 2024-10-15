const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000;

function menu() {
    console.log('\nSelecione a operação desejada:');
    console.log('1. Consultar saldo');
    console.log('2. Sacar dinheiro');
    console.log('3. Depositar dinheiro');
    console.log('4. Sair');

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                console.log(`Seu saldo é: R$ ${saldo}`);
                menu();
                break;
            case '2':
                rl.question('Informe o valor para saque: ', (valor) => {
                    valor = parseFloat(valor);
                    if (valor > saldo) {
                        console.log('Saldo insuficiente.');
                    } else {
                        saldo -= valor;
                        console.log(`Saque realizado! Seu novo saldo é: R$ ${saldo}`);
                    }
                    menu();
                });
                break;
            case '3':
                rl.question('Informe o valor para depósito: ', (valor) => {
                    valor = parseFloat(valor);
                    saldo += valor;
                    console.log(`Depósito realizado! Seu novo saldo é: R$ ${saldo}`);
                    menu();
                });
                break;
            case '4':
                console.log('Obrigado por usar o caixa eletrônico. Até logo!');
                rl.close();
                break;
            default:
                console.log('Opção inválida, tente novamente.');
                menu();
        }
    });
}

menu();
