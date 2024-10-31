
// Função de calculo de saldo de rankeadas
function saldoRank (vitorias, derrotas){
    let result = vitorias - derrotas
    return result
}

// Função de nível de rankeada
function nivel (result){
    let rank
    switch (true) {
        case (result > 10 && result < 21) :
            rank = "Bronze"
            break;
        case (result > 20 && result < 51) :
            rank = "Prata"
            break;
        case (result > 50 && result < 81) :
            rank = "Ouro"
            break;        
        case (result > 80 && result < 91) :
            rank = "Diamante"
            break;
        case (result > 90 && result < 101) :
            rank = "Lendário"
            break;
        case (result >= 101) :
                rank = "Imortal"
                break;
        default:
        rank = "Ferro"
    }
    return rank
}

// Guarda o Valor que retornou da função saldoRank
let result = saldoRank(14, 2)

// Guarda o Valor que retornou da função nivel
let rank = nivel(result)

// Saída
console.log("O Herói tem de saldo de " + result + " está no nível de " + rank)