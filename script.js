var setaEsquerda = document.getElementById("setaEsquerda")
var bruna = document.getElementById("bruna")
var leonardo = document.getElementById("leonardo")
var samantha = document.getElementById("samantha")
var setaDireita = document.getElementById("setaDireita")

function rolarParaDireita(){
    setaEsquerda.style = "display:flex"
    bruna.style = "display:none"
    samantha.style = "display:flex"
    setaDireita.style="display:none"
}

function rolarParaEsquerda(){
    setaEsquerda.style = "display:none"
    bruna.style = "display:flex"
    samantha.style = "display:none"
    setaDireita.style="display:flex"
}

var telefone = document.getElementById('telefone');
telefone.addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});
