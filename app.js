let listaDeNumerosSorteados = []
let limiteDeNumeros = 10;
let numeroSecreto = gerarNemeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
};

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Salve rapaziada! Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

    exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou');

        let palavreTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas =`Você descobriu o numero secreto com ${tentativas} ${palavreTentativas}`; 

        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute('disabled');

    }else{
        if(chute >= numeroSecreto){
            exibirTextoNaTela('h1','Errou');
            exibirTextoNaTela('p', 'O numero secreto é menor');
        }else{
            exibirTextoNaTela('h1','Errou');
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNemeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random() *  limiteDeNumeros + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if(quantidadeDeElementosNaLista == limiteDeNumeros){
        listaDeNumerosSorteados = []
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNemeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute =document.querySelector("input");
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNemeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();   
    document.getElementById("reiniciar").setAttribute("disabled",true)
}