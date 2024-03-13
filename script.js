let textArea = document.querySelector(".digitar-texto");
let mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoAEncriptar = encriptar(textArea.value.toLowerCase());
    mensagem.textContent = textoAEncriptar;
    textArea.value = "";
}

function btnDesencriptar() {
    const textoADesencriptar = desencriptar(textArea.value.toLowerCase());
    mensagem.textContent = textoADesencriptar;
    textArea.value = "";
}


function encriptar(palavra) {
    return palavra.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')   
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat'); 
}

function desencriptar(palavra) {
    return palavra.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')   
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u'); 
}

