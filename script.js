function abrirPagina(id) {
    let elemento = document.getElementById(id);
    if (elemento){
        let meuHref = elemento.querySelector('a').href;
        console.log(meuHref);
    }else {
        console.log("elemento não encontrado!");
    }

}

