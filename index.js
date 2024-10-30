let username = "Lorenzo"
let xp = 1001
let rank


switch (true) {
    case (xp > 1000 && xp < 2001) :
        rank = "Bronze"
        break;
    case (xp > 2000 && xp < 5001) :
        rank = "Prata"
        break;
    case (xp > 5000 && xp < 7001) :
        rank = "Ouro"
        break;        
    case (xp > 7000 && xp < 8001) :
        rank = "Platina"
        break;
    case (xp > 8000 && xp < 9001) :
        rank = "Ascendente"
        break;
    case (xp > 9000 && xp < 10001) :
            rank = "Imortal"
            break;
    case (xp >= 10001) :
            rank = "Radiante"
            break;
    default:
    rank = "Ferro"
}

console.log("O Héroi de nome " + username + " está no nível de " + rank)

