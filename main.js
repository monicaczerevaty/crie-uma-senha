const numeroSenha = document.querySelector('.parametro-senha-texto');
let tamanhoSenha = 12;
numeroSenha. textContent = tamanhoSenha;
const checkbox = document.querySelectorAll('.checkbox');
const botoes = document.querySelectorAll('.parametro-senha-botao');
const forcasenha = document.querySelector('.forca')
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function diminuiTamanho(){
    if(tamanhoSenha > 1){
//tamanhoSenha = tamanhoSenha - 1;
tamanhoSenha--;
    }
numeroSenha.textContent = tamanhoSenha;
geraSenha();
}
function aumentaTamanho(){
    if(tamanhoSenha < 20){
   // tamanhoSenha = tamanhoSenha + 1;
   tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

// codigo omitido
const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinuscolas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
function geraSenha(){
    let alfabeto = '';
    if(checkbox[0])
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i ++){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio); 
    senha = senha = letrasMaiusculas[numeroAleatorio];
    }
}
campoSenha.value = senha;
classificaSenha();
}
function.classificaSenha(){
    forcasenha.classList.remove('fraca');
    if(tamanhoSenha > 11){
        forcasenha.classList.add('forte');  
    }
}