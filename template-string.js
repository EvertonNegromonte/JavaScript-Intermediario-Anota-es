//Variavel let//
//sem template-string//
/*let nome = 'Everton'
let sobrenome = 'Negromonte'
console.log('Meu nome é' + nome + '' + sobrenome + 'bom dia.');*/


//metodo template-string//
/*let nome = 'Everton'
let sobrenome = 'Negromonte'
console.log(`Meu nome é ${nome} ${sobrenome}, bom dia. `);
console.log(`A soma de 1 + 1 = ${1 + 1} `);
console.log(`O objeto json ${{chave: 'valor'}}`);
let meuobjeto = {
    chave: 'novo valor'
}*/

// Sem Ternario//
let isValid = false;
function verify (isValid){
    if (isValid) {
        return true;
    } else{
    }   return false;
    }
console.log (verify(isValid));        

// Com ternario
const result = isValid ? true : false;

let zero = 0;
const numeroResultado = zero > 0 ? 0 : -1;
console.log (numeroResultado);
