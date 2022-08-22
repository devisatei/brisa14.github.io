let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imgs/firefox-icon.png') {
      minhaImagem.setAttribute ('src','imgs/firefox2.png');
    } else {
      minhaImagem.setAttribute ('src','imgs/firefox-icon.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
	let meuNome = prompt('Digite seu nome.');
	if (!meuNome || meuNome === null) {
		defineNomeUsuario();
	}
	else {
		localStorage.setItem('nome', meuNome);
		meuCabecalho.textContent = 'Mozilla é legal,' + meuNome;
	}
}

if (!localStorage.getItem('nome')) {
	defineNomeUsuario();
}
else {
	let nomeGuardado = localStorage.getItem('nome');
	meuCabecalho.textContent = 'Mozilla é legal,' + nomeGuardado;
}

meuBotao.onclick = function() { defineNomeUsuario();
}