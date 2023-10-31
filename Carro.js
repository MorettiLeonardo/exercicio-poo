const Veiculo = require("./Veiculo")

module.exports = class Carro extends Veiculo {
    constructor (velocidadeMaxima, marca, modelo, anoModelo) {
        super(velocidadeMaxima)
        this.marca = marca
        this.modelo = modelo
        this.anoModelo = anoModelo
    }

    getInfos() {
        console.log(`Velocidade máxima: ${this.velocidadeMaxima}km, marca: ${this.marca}, ano do modelo: ${this.anoModelo}`)
    }
}