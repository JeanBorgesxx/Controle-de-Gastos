
        const matrizGastos = [
                ['Alimentação', 0],
                ['Transporte', 0],
                ['Lazer', 0],
                ['Outros', 0],
                ['Total', 0],
        ]
    //Funções Utilitárias
    const obterElemento = (id) => document.getElementById(id);
    const valorNegativo = (valor) => valor < 0;
    const somaValor = (total, valor) => total + valor;
    const limparCampos = () => obterElemento('valor').value = '';
    const formataMoeda = (valor) => valor.toFixed(2).replace('.',',');

    
    //Obter Valores do Formulário
    const obterValorInformado = () => parseFloat(obterElemento('valor').value);
    const obterCategoriaInformado = () => obterElemento('categoria').value;


    //Obter Categoria da Matriz
    const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item [0] === nomeCategoria);


    //Atualizar valores da Matriz
    const atualizaValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);


    //Atualizar interface
    const atualizaInterface = () => (
        matrizGastos.forEach(([nome, valor]) =>{
            const elemento = obterElemento(nome);
            elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`
        })
    )



function adicionarGasto() {

    const valorInformado = obterValorInformado ();
    const categoriaInformada = obterCategoriaInformado();

    if(valorNegativo(valorInformado)){
        alert('Valor Inválido. O valor não pode ser negativo.');
        return;
    }

    const categoria = obterCategoria (matrizGastos, categoriaInformada);
    const total = obterCategoria (matrizGastos, 'Total');

    atualizaValorCategoria(categoria, valorInformado);
    atualizaValorCategoria(total, valorInformado);
    atualizaInterface();
    limparCampos();

}
