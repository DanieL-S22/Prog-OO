class ContaBancaria {
    titular: string;
    agencia: number;
    numero: number;
    saldo: number = 0;
    limite: number = 0;
    tipo: string;

    constructor(agencia: number, numero: number, tipo: string, titular:string) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.titular = titular;
    }

    mostrarSaldo() {
        console.log("Saldo atual: " + this.saldo);
    }

    mostrarSaldoComLimite() {
        const saldoTotal: number = this.limite + this.saldo;
        console.log("Saldo atual com limite: " + saldoTotal.toFixed(2));
    }

    depositar(valor: number) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(
                "Depósito de R$" + valor.toFixed(2) + " efetuado com sucesso!"
            );
        } else {
            console.log("Valor informado inválido");
        }
    }

    sacar(valor: number) {
        const saldoTotal: number = this.limite + this.saldo;
        if (valor <= saldoTotal) {
            this.saldo -= valor;
            console.log(
                "Saque de R$" + valor.toFixed(2) + " efetuado com sucesso!"
            );
        } else {
            console.log("Valor informado inválido");
        }
    }

    adicionarLimite(valor: number) {
        if (valor > 0) {
            this.limite += valor;
            console.log(
                "Limite de R$" + valor.toFixed(2) + " adicionado com sucesso!"
            );
        } else {
            console.log("Valor informado inválido");
        }
    }


    fazerPix (valor: number, remetente:ContaBancaria) {
    const saldoTotal: number = this.saldo;
    if (valor >= 0 && valor <=this.saldo ) {
        this.saldo -= valor;
        remetente.saldo += valor
        console.log (
            "PIX de R$" + valor.toFixed(2) + " efetuado com sucesso!"

        )
    }
    else {
        console.log ("Valor inválido");
    }
}
    receberPix (valor:number) {
        const saldo = this.fazerPix
    }
}    

const cb1 = new ContaBancaria(111, 111, "Corrente", "Sergio");
const cb2 = new ContaBancaria(111, 222, "Poupança", "Daniel");

console.log("cb1");
console.log(cb1.titular)

cb1.mostrarSaldoComLimite();
cb1.depositar(500);
cb1.mostrarSaldoComLimite();
cb1.sacar(100);
cb1.mostrarSaldoComLimite();
cb1.adicionarLimite(1000);
cb1.mostrarSaldo();
cb1.mostrarSaldoComLimite();
cb1.fazerPix (10000,cb2);
cb1.mostrarSaldo();

console.log("================");


console.log("cb2");
console.log(cb2.titular)

cb2.mostrarSaldoComLimite();
cb2.mostrarSaldo();