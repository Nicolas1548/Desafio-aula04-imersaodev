var listaFilmes = [];
var listaNomes = [];



function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value;
  var nomeFilme = document.getElementById('nome').value;
  var elementoListaFilmes = document.getElementById('listaFilmes')
 
  if (filmeFavorito.endsWith('.jpg') && nomeFilme != '') {
    listaNomes.push(nomeFilme);
    listaFilmes.push(filmeFavorito);

    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + "<div style='display: inline-block; text-align: center; margin-right: 20px;'>" +
    '<figure>' + '<img src=' + filmeFavorito + '>' + '<figcaption>'+ nomeFilme + '</figcaption>' + '</figure>' + '</div>';
    
    document.getElementById('filme').value = '';
    document.getElementById('nome').value = '';

  } else {
    alert('Endereço da imagem não é válido ou campo de nome está vazio.');
  }
  
}

function removerFilme () {
 var remova = document.getElementById('nome').value;
 if (remova == '') {
    alert ("Insira o nome do filme");
} else {
    verificaFilmePorNome(remova);
    atualizarInterface();
}

}

function verificaFilmePorNome(nome) {     
  var i = listaNomes.indexOf(nome); 
    if (i !== -1) {
        listaFilmes.splice(i, 1);
        listaNomes.splice(i, 1);
        atualizarInterface();
    }
  }

  function atualizarInterface() {
    var elementoListaFilmes = document.getElementById('listaFilmes');
    elementoListaFilmes.innerHTML = '';

    for (var i = 0; i < listaFilmes.length; i++) {
        elementoListaFilmes.innerHTML += "<div style='display: inline-block; text-align: center; margin-right: 20px;'>" +
          '<figure>' + '<img src=' + listaFilmes[i] + '>' + '<figcaption>' + listaNomes[i] + '</figcaption>' + '</figure>' + '</div>';
      }    
}


