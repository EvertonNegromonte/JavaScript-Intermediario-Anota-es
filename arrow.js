/*function soma(x,x){
    return x + y;
}
console.log(soma(3,4));*/


//invocando uma function//
/*const multiplicacao = function(x, y){
    return x * y;
}
console.log(multiplicacao(2,5));*/



//function no formato arrow, inclui a => e excui a function
/*const dividir = (x, y) => {
return x / y;
}
console.log(dividir(10,5))*/


//Para criar objetos com function arrow deve-se encapsular {}//
/*const objeto = () => ({nome: 'everton', sobrenome: 'negromonte'});
console.log(`Meu nome é ${nome} ${sobrenome}, bom dia. `);*/

//Spread - Lista incluindo itens novos

/*let lista = [1, 2, 5];
let listaIncluir = [3, 5];

const listResult = [1,2, ...listaIncluir, 5];
console.log(listResult)*/

let arr = ['a', 'b', 'c',];
let arr2 = [...arr];
arr2.push('d');
console.log(`Arr = ${arr}`);
console.log(`Arr2 = ${arr2}`);
