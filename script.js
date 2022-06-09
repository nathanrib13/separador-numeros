function contar() {
    let inicio = document.getElementById('txtin')
    let fim = document.getElementById('txtfi')
    let passo = document.getElementById('txtpa')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML=`Não foi possivel estabelcer contagem`
        window.alert('[ERRO] Insira um valor válido')
    } else {
        res.innerHTML = 'Contando: <br>'
        //trasnformando os valores do formulario de txt pra number
        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)
        if (pas<=0){
            window.alert(`${pas} Não é um numéro válido, tente novamente`)
            pas = 1
            res.innerHTML = 'O valor 1 foi consiredado: <br> '
    
        }

        if (ini < fi) {
            //criando contagem progressiva
            for (let cont = ini; cont <= fi; cont += pas) {
                res.innerHTML += ` ${cont} \u{27A1}   `
            }
        } else {
            //criando contagem regresisva 
            for (let cont = ini; cont >= fi; cont -= pas)
                res.innerHTML += ` ${cont} \u{27A1}`
        }
        res.innerHTML += `\u{1F3C1}`

    }


}