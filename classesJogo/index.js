class hero{
    constructor(nome, idade, tipo, ataque = ""){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque 
    }

    special(){
        if (this.tipo === "Mago") {
            this.ataque = "magia"
        } 
        if (this.tipo === "Guerreiro") {
            this.ataque = "espada"
        } 
        if (this.tipo === "Monge") {
            this.ataque = "artes marciais"
        } 
        if (this.tipo === "Ninja") {
            this.ataque = "shuriken"
        } 
        return this.ataque
    }

    atacar(){
        this.ataque = this.special()
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }


}

let junior = new hero("Junior", "15", "Mago")
let enoar = new hero("Enoar", "21", "Ninja")

junior.atacar()
enoar.atacar()