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
const valorentropia = document.querySelector('.entropia');
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
classificaSenha(alfabeto.lenght);
}
function.classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha*Math.log2(alfabeto.lenght);
    forcasenha.classList.remove('fraca');
    if(entropia > 57){
        forcasenha.classList.add('forte');  
    } else if(entropia > 35 && entropia < 57){
        forcasenha.classList.add('media');
    } else if (entropia < 35){
        forcasenha.classList.add('fraca');
    }
}
valorentropia.textContent = "um computador pode levar ate" + Math.floor(2**entropia)/(100e6*60*60*24)+"dias para descobrir essa senha";