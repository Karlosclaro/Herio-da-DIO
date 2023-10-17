function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function calcularNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

function main() {
    const vitorias = 44; 
    const derrotas = 19;

    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = calcularNivel(vitorias);

    console.log(`O Herói Carlos tem um saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

main();
