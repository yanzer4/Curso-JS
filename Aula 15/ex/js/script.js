const numero = Number(prompt('Digite um número'));
const numeroTitulo =  document.getElementById('numero-titulo');
const textoPlace = document.getElementById('texto')

/*
Raiz quadrada = elevar o número a 0.5 (**0.5)
.........é inteiro
é NaN
Arredondando para baixo
Arredondando para cima
Com duas casas decimais.



*/

numeroTitulo.innerHTML = numero;
textoPlace.innerHTML ='';
textoPlace.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
textoPlace.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
textoPlace.innerHTML += `<p>É NaN ${Number.isNaN(numero)}.</p>`;
textoPlace.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
textoPlace.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
textoPlace.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;
