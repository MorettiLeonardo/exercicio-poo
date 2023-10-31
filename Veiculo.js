module.exports = class Veiculo {
    constructor(velocidadeMaxima, ligado=false) {
        this.velocidade = 0
        this.velocidadeMaxima = velocidadeMaxima
        this.ligado = ligado
    }

    getVelocidade() {
        return this.velocidade
    }

    setVelociade(valor) {
        return this.velocidade + valor
    }

    acelerar() {
        if (this.ligado == false) {
            console.log("o veículo está parado")
            return
        }  

        if (this.velocidade > this.velocidadeMaxima) {
            console.log("velociade máxima atingida")
        } else {
            this.velocidade += 10
            console.log(`acelerando... velocidade: ${this.velocidade}`)
        }
    }
    
    freiar() {
        if (this.ligado == false) {
            console.log("o veículo está parado")
            return
        } 

        if (this.velocidade <= 0) {
            console.log("o veículo está parado")
        } else {
            this.velocidade -= 10
            console.log(`freiando... velocidade: ${this.velocidade}`)
        }
    }

    ligar() {
        if (this.ligado == true) {
            console.log("O veiculo já está ligado")
        } else {
            this.ligado = true
        }
    }
}