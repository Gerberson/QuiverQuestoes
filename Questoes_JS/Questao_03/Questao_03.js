function enviar() {
    const menssagem = document.getElementById('menssagem').value

    console.log(menssagem)

    if (menssagem == "")
    {
        alert("Por favor, digite um texto.")
        return
    }

    const lista = processar(menssagem)
    const tbody = document.querySelector('table tbody')

    tbody.innerHTML = ""

    for (let i = 0; i < lista.length; i++) {
        let letra = lista[i][0, 0]
        let qtd = lista[i][0, 1]

        tbody.innerHTML += `
            <tr>
                <td> ${letra} </td>
                <td> ${qtd} </td>
            </tr>
        `    
    }
}

function processar(menssagem) {
    let menssagemLimpa = ""

    let letras = []
    let letraEQtd = []

    for (let i = 0; i < menssagem.length; i++) {
        if (!limpar(menssagem[i]))
            menssagemLimpa += menssagem[i]
    }

    menssagem = menssagemLimpa.toUpperCase()

    let letra = ""
    const qtd = 1

    for (let i = 0; i < menssagem.length; i++) {
        letra = menssagem[i]

        let encontrado = false

        for (let k = 0; k < letras.length; k++) {
            if (letras[k][0, 0] == letra) {
                let soma = letras[k][0, 1] += qtd
                
                letraEQtd = [letra, soma]

                letras[k] = letraEQtd
                encontrado = true
            }
        }

        if (!encontrado) {
            letraEQtd = [letra, qtd]
            letras.push(letraEQtd)
        }
    }

    for (let i = 0; i < letras.length; i++) {
        for (let j = 0; j < letras.length; j++) {
            let atual = letras[i]
            let corrente = letras[j]

            let qtdAtual = atual[0, 1]
            let qtdCorrente = corrente[0, 1]

            if (qtdAtual > qtdCorrente)
            {
                let armazenar = atual

                letras[i] = corrente
                letras[j] = armazenar
            }
        }
    }

    return letras
}

function limpar(caracter) {
    if (!isNaN(Number(caracter)) == true)
        return true

    if (typeof caracter == 'string')
        return removerCaracteres(caracter)
}

function removerCaracteres(caracter) {
    const caracteres = [' ', ',', '.', '?', '!', '"', "'", ':', ';', '-', '(', ')', '*','#', '@', '$', '%', '°']

    for (let i = 0; i < caracteres.length; i++) {
        if (caracteres[i] == caracter)
            return true
    }

    return false
}