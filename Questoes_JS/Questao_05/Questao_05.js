const lista = [
    'FORD - FUSION 2.5L I-VCT FLEX AUTOMATICO',
    'FORD - FUSION FWD 3.0 V6',
    'FORD - FUSION HYBRID 2.5 AUTOMATICO', 
    'FORD - FUSION SEL 2.0 ECOBO. 16V 248CV AUT. (4 Portas)', 
    'FORD - FUSION SEL 2.3 16V AUTOMATICO', 
    'FORD - FUSION SEL 2.5 16V AUTOMATICO', 
    'FORD - FUSION SEL 3.0 V6 24V 243CV AUTOMATICO', 
    'FORD - FUSION SEL 3.0 V6 AWD 24V 243 CV AUTOMATICO', 
    'FORD - FUSION TITANIUM 2.0 GTDI ECOBO FWD AUTOMATICO', 
    'FORD - FUSION TITANIUM AWD 2.0 16V GTDI TURBO AUTOMATICO', 
    'FORD - FUSION TITANIUM HYBRID 2.0 145CV AUT. AUTOMATICO'
]

function buscar() {
    const entrada = document.getElementById('menssagem').value

    console.log(entrada)

    if (entrada == '')
    {
        alert('Por favor, digite um texto.')
        return
    }
    
    const textoDeEntrada =  entrada.toUpperCase()
    percorrerTextoEntrada(textoDeEntrada, lista)
}

function percorrerTextoEntrada(texto, lista) {
    const listaDeTextoDeEntrada = []
    const listaDeFrasesDivididas = [];
    let pontos = 0
    let rank = []
    const rankPorFrase = []

    listaDeTextoDeEntrada.push(dividirFrasePorEspaco(texto))
    listaDeFrasesDivididas.push(montarListaDivididaPorEspaco(lista))

    for (let i = 0; i < listaDeFrasesDivididas[0].length; i++) {
        const rankPorPalavra = []

        let frase = listaDeFrasesDivididas[0][i]

        for (let j = 0; j < listaDeTextoDeEntrada[0].length; j++) {
            let palavra = listaDeTextoDeEntrada[0][j]

            rank = montarRankPorPalavraDeEntrada(palavra, frase, i)
            
            rankPorPalavra.push(rank)
        }

        for (let k = 0; k < rankPorPalavra.length; k++) {
            pontos += rankPorPalavra[k][1] + rankPorPalavra[k][2]
        }

        rankPorFrase.push([i, pontos])

        rank = []
        pontos = 0
    }

    ordernarPorMaiorPontuacao(rankPorFrase)
}

function montarListaDivididaPorEspaco(lista) {
    const listaDeFrasesDivididas = []

    for (let i = 0; i < lista.length; i++) {
        let frase = lista[i]
        listaDeFrasesDivididas.push(dividirFrasePorEspaco(frase))
    }

    return listaDeFrasesDivididas
}

function dividirFrasePorEspaco(frase) {
    const fraseDividida = []

    let palavra = ''
    let espaço = false

    for (let k = 0; k < frase.length; k++) {
        let letra = frase[k]
        
        if (letra != ' ') {
            palavra += letra
            espaço = false
        }
        else {
            espaço = true
        }

        if (espaço) {
            fraseDividida.push(palavra)
            palavra = ''
        }
    }

    fraseDividida.push(palavra)

    return fraseDividida
}

function montarRankPorPalavraDeEntrada(palavra, frase, indiceDaFrase) {
    let qtdLetraPorPalavra = 0
    let qtdPalavrasEncontradas = 0
    let palavraEncontrada = false
    let lista = []

    for (let k = 0; k < frase.length; k++) {
        let palavraDaFrase = frase[k]

        for (let j = 0; j < palavraDaFrase.length; j++) {

            for (let i = 0; i < palavra.length; i++) {
                let letraDaPalavra = palavra[i]
                let letraDaFrase = palavraDaFrase[j]

                if (letraDaPalavra == letraDaFrase) {
                    palavraEncontrada = true
                    qtdLetraPorPalavra += 1
                    j++
                }
                else {
                    break
                }
            }
        }

        if (palavraEncontrada) {
            qtdPalavrasEncontradas += 1
    
            palavraEncontrada = false
        }
    }

    lista.push(indiceDaFrase, qtdPalavrasEncontradas, qtdLetraPorPalavra)

    return lista
}

function ordernarPorMaiorPontuacao(listaDeRank) {
    for (let i = 0; i < listaDeRank.length; i++) {
        let atual = listaDeRank[i]

        for (let k = 0; k < listaDeRank.length; k++) {
            let corrente = listaDeRank[k]

            if (atual[1] > corrente[1]) {
                let armazenar = listaDeRank[i]

                listaDeRank[i] = listaDeRank[k]
                listaDeRank[k] = armazenar
            }            
        }        
    }

    imprimirResultado(listaDeRank)
}

function imprimirResultado(listaOrdenada) {
    const imprimirLista = []

    for (let i = 0; i < listaOrdenada.length; i++) {
        let atual = listaOrdenada[i]
        for (let j = 0; j < lista.length; j++) {
            let corrente = lista[j]

            if (atual[0] == j)
            {
                imprimirLista.push([atual[0], corrente])
            }
        }        
    }

    imprimirNaTela(imprimirLista)
}

function imprimirNaTela(resultado) {
    const tbody = document.querySelector('table tbody')

    tbody.innerHTML = ""

    for (let i = 0; i < resultado.length; i++) {
        let frase = resultado[i][1]

        tbody.innerHTML += `
            <tr>
                <td> ${frase} </td>
            </tr>
        `    
    }
}