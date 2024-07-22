class Carro {
    nome = 'Onix'
    acelerar() {
        this.mostraNome()
        console.log('ARGUMENTS', arguments)
    }
    mostraNome() {
        console.log('Nome:', this.nome)
    }
}
class OutroCarro {
    nome = "HB20"
}

//Bind altera o contexto da classe, no caso usa o this do OutroCarro
const carro = new Carro()
const carro2 = new OutroCarro()
carro.mostraNome.bind(carro2)()

//Call substitui uma chamada dentro de uma função!
carro.acelerar.call({mostraNome: () => console.log('mostraNome')})
carro.acelerar.apply({mostraNome: () => console.log('mostraNome')}, ['oi', 1, 2])