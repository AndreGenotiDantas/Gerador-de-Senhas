let sliderElemente = document.querySelector("#slider");
let buttonElemente = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let Password = document.querySelector("#passoword");


let containerPassoword = document.querySelector("#container_passoword");

let charser = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElemente.value;

slider.oninput = function(){//estudar essa linha
    sizePassword.innerHTML = this.value;
}


function generatePassword(){//estudar esse algoritimo
    alert("Vamos gerar a senha");
    let pass = "";
    for(let i = 0, n = charser.length; i < sliderElemente.value; ++i){
        pass += charser.charAt(Math.floor(Math.random() * n));
       
    }
    Password.innerHTML = pass;
    novaSenha = pass;
    containerPassoword.classList.remove("hide");
}

function copyPassoword(){
    alert("Senha copiada");
    navigator.clipboard.writeText(novaSenha);//vai copiar o texto como se foce um ctr c
}