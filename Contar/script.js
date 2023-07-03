function Contar(){
    let ini = document.getElementById("txti");
    let fim = document.getElementById("txtf");
    let passo = document.getElementById("txtp");
    let res = document.getElementById("res");

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = "Impossivel contar";
        window.alert('[ERRO]')
    }
    else{
        res.innerHTML = "Contado: <br>";
        let I = Number(ini.value);
        let F = Number(fim.value);
        let P = Number(passo.value);
        if(P <= 0){
            window.alert('Passo invalido ! Considerando PASSO 1');
            P = 1;
        }
        else if(I < F){
            // Contagem crescente
            for(let c = I; c <= F; c += P){
                console.log(c);
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        else{
            // Contagem decrescente
            for(let c = I; c >= F; c -= P){
                console.log(c);
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }

}