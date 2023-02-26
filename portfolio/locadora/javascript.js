	function validaForm(){
		let validaCod = document.forms["cadastrar"]["codigo"].value;
		let validaDat = document.forms["cadastrar"]["data"].value;
		let validaTit = document.forms["cadastrar"]["titulo"].value;
		let validaDir = document.forms["cadastrar"]["diretor"].value;
		let validaAto = document.forms["cadastrar"]["ator"].value;
		let validaNot = document.forms["cadastrar"]["nota"].value;
		let validaRad = document.forms["cadastrar"]["radio"].value;
		
	if (validaCod == "") {
		alert("O código deve ser preenchido!");
		return false;
	}	
	if (validaDat == "") {
		alert("A data deve ser preenchido!");
		return false;
	}	
	if (validaTit == "") {
		alert("O titulo deve ser preenchido!");
		return false;
	}	
	if (validaDir == "") {
		alert("O nome do diretor deve ser preenchido!");
		return false;
	}
	if (validaAto == "") {
		alert("O nome do ator/atriz deve ser preenchido!");
		return false;
	}	
	if (validaNot == "") {
		alert("A nota IMDB deve ser preenchido!");
		return false;
	}	
	if (validaRad == "") {
		alert("O gênero deve ser marcado!");
		return false;
	}	
	}
	function insere(){
	let codi = document.forms["cadastrar"]["codigo"].value;
	let data = document.forms["cadastrar"]["data"].value;
	let titu = document.forms["cadastrar"]["titulo"].value;
	let dire = document.forms["cadastrar"]["diretor"].value;
	let ator = document.forms["cadastrar"]["ator"].value;
	let nota = document.forms["cadastrar"]["nota"].value;
	let radi = document.forms["cadastrar"]["radio"].value;

	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML = `<th scope="row">${codi}</th>`;
	inserir.innerHTML +=	`<td>${titu}</td>`;
	inserir.innerHTML +=	`<td>${dire}</td>`;
	inserir.innerHTML +=	`<td>${data}</td>`;
	inserir.innerHTML +=	`<td>${radi}</td>`;
	inserir.innerHTML +=	`<td>${ator}</td>`;
	inserir.innerHTML +=	`<td>${nota}/10</td>`;

	if(radi == "Drama"){
		let inserirEspecial = window.document.getElementById("InserirDrama");
		inserirEspecial.innerHTML = `<th scope="row">${codi}</th>`;
		inserirEspecial.innerHTML +=	`<td>${titu}</td>`;
		inserirEspecial.innerHTML +=	`<td>${dire}</td>`;
		inserirEspecial.innerHTML +=	`<td>${data}</td>`;
		inserirEspecial.innerHTML +=	`<td>${radi}</td>`;
		inserirEspecial.innerHTML +=	`<td>${ator}</td>`;
		inserirEspecial.innerHTML +=	`<td>${nota}/10</td>`;
	}

	if(radi == "comédia"){
		let inserirEspecial = window.document.getElementById("InserirComedia");
		inserirEspecial.innerHTML = `<th scope="row">${codi}</th>`;
		inserirEspecial.innerHTML +=	`<td>${titu}</td>`;
		inserirEspecial.innerHTML +=	`<td>${dire}</td>`;
		inserirEspecial.innerHTML +=	`<td>${data}</td>`;
		inserirEspecial.innerHTML +=	`<td>${radi}</td>`;
		inserirEspecial.innerHTML +=	`<td>${ator}</td>`;
		inserirEspecial.innerHTML +=	`<td>${nota}/10</td>`;
	}
	if(radi == "Ação"){
		let inserirEspecial = window.document.getElementById("InserirAcao");
		inserirEspecial.innerHTML = `<th scope="row">${codi}</th>`;
		inserirEspecial.innerHTML +=	`<td>${titu}</td>`;
		inserirEspecial.innerHTML +=	`<td>${dire}</td>`;
		inserirEspecial.innerHTML +=	`<td>${data}</td>`;
		inserirEspecial.innerHTML +=	`<td>${radi}</td>`;
		inserirEspecial.innerHTML +=	`<td>${ator}</td>`;
		inserirEspecial.innerHTML +=	`<td>${nota}/10</td>`;
	}
	if(radi == "Animação"){
		let inserirEspecial = window.document.getElementById("InserirAnimacao");
		inserirEspecial.innerHTML = `<th scope="row">${codi}</th>`;
		inserirEspecial.innerHTML +=	`<td>${titu}</td>`;
		inserirEspecial.innerHTML +=	`<td>${dire}</td>`;
		inserirEspecial.innerHTML +=	`<td>${data}</td>`;
		inserirEspecial.innerHTML +=	`<td>${radi}</td>`;
		inserirEspecial.innerHTML +=	`<td>${ator}</td>`;
		inserirEspecial.innerHTML +=	`<td>${nota}/10</td>`;
	}
	if(radi == "romance"){
		let inserirEspecial = window.document.getElementById("InserirRomance");
		inserirEspecial.innerHTML = `<th scope="row">${codi}</th>`;
		inserirEspecial.innerHTML +=	`<td>${titu}</td>`;
		inserirEspecial.innerHTML +=	`<td>${dire}</td>`;
		inserirEspecial.innerHTML +=	`<td>${data}</td>`;
		inserirEspecial.innerHTML +=	`<td>${radi}</td>`;
		inserirEspecial.innerHTML +=	`<td>${ator}</td>`;
		inserirEspecial.innerHTML +=	`<td>${nota}/10</td>`
	}
	if(radi == "suspense"){
		let inserirEspecial = window.document.getElementById("InserirSuspense");
		inserirEspecial.innerHTML = `<th scope="row">${codi}</th>`;
		inserirEspecial.innerHTML +=	`<td>${titu}</td>`;
		inserirEspecial.innerHTML +=	`<td>${dire}</td>`;
		inserirEspecial.innerHTML +=	`<td>${data}</td>`;
		inserirEspecial.innerHTML +=	`<td>${radi}</td>`;
		inserirEspecial.innerHTML +=	`<td>${ator}</td>`;
		inserirEspecial.innerHTML +=	`<td>${nota}/10</td>`;
	}
}