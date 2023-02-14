// alert('Um alerta aleatório');
// let nota1;
// let nota2;
// let nota3;
// let media;
// let buttomEnviar=document.querySelector("#inviar");

// buttomEnviar.addEventListener('click', function (event){
//     event.preventDefault();
//     nomeAluno=document.querySelector("#nome").value;
//     nota1=parseInt(document.querySelector("#nota1").value);
//     nota2=parseInt(document.querySelector("#nota2").value);
//     nota3=parseInt(document.querySelector("#nota3").value);

document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault();

    let nota1 = parseInt(document.querySelector('#nota1').value);
    let nota2 = parseInt(document.querySelector('#nota2').value);
    let nota3 = parseInt(document.querySelector('#nota3').value);
    media=(nota1+nota2+nota3)/3;

    console.log("A média é: " + media);
    });
