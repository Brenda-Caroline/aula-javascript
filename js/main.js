/*INTRODUÇÃO AO JAVASCRIPT*/

/*var nome = "Brenda Caroline";
var idade = 22;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"));

var troca = frase.replace("Japão", "Canada");
console.log(troca);*/


/*DICIONÁRIO*/

/*var frutas = [{nome: "maçã", cor: "vermelho"}, {nome: "uva", cor: "roxo"}];
console.log(frutas[1].nome);

var fruta = {nome: "maçã", cor: "vermelho"}
console.log(fruta.nome);
alert(fruta.cor);*/


/*ARRAYS*/

/*var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
lista.pop();

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));*/


/*CONDICIONAIS */

/*var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("Maior de idade");
}else {
    alert("Menor de idade");
}*/


/* ESTRUTURA DE REPETIÇÃO */

/*var count = 0;
while(count <= 5) {
    console.log(count)
    count = count +1;
}

var count;
for(count=0; count <= 5; count ++) {
    console.log(count);
}*/


/*INFORMAÇÃO DE DIA E HORÁRIO */

/*var d = new Date();
console.log(d);
console.log("Hoje é " +d.getDate()+ "/" + d.getMonth()+1);
console.log(d.getDay());
console.log(d.getMonth()+1);
console.log(d.getHours());
console.log(d.getMinutes());
*/


/* FUNÇÕES */

function clicou() {
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";

    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://globallabs.academy/"); //Abre nova página em outra guia
    //window.location.href = "https://globallabs.academy/"; //Abre nova página na mesma guia
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML= "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemoveover").innerHTML="Passe o mouse aqui";
    elemento.innerHTML= "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/* FUNÇÃO SOMA */
/*function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5, 10));*/

/* FUNÇÃO TROCA PALAVRA */
/*function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));*/

/* FUNÇÃO COM VARIÁVEL LOCAL */
/*function validaIdade(idade) {
    if (idade >= 18) {
        return true
    } else {
        return false
    }
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));*/