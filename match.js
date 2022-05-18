// Match serve para buscar cinteudo especifico para algo q vc não tem certeza//
const textoNaoEstruturado = 'Meu CPF é 704.253.304.60';
const regex = new RegExp ('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');
console.log(textoNaoEstruturado.match(regex));

