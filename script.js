let celula;
let tabela = [];
function inicio (){
    for (let i = 1; i<=1000; i++){

celula = `<li class="number${i}">  ${i}  </li>`;
tabela = document.querySelector('.tabela').innerHTML;
tabela = tabela + celula;
document.querySelector('.tabela').innerHTML = tabela;
    }
}

//pegar elemento document.querySelector('.classe')
//add classe elemento.classList.add('classe')


inicio();

let numero = 0;
let primos = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
    101,
    103,
    107,
    109,
    113,
    127,
    131,
    137,
    139,
    149,
    151,
    157,
    163,
    167,
    173,
    179,
    181,
    191,
    193,
    197,
    199,
    211,
    223,
    227,
    229,
    233,
    239,
    241,
    251,
    257,
    263,
    269,
    271,
    277,
    281,
    283,
    293,
    307,
    311,
    313,
    317,
    331,
    337,
    347,
    349,
    353,
    359,
    367,
    373,
    379,
    383,
    389,
    397,
    401,
    409,
    419,
    421,
    431,
    433,
    439,
    443,
    449,
    457,
    461,
    463,
    467,
    479,
    487,
    491,
    499,
    503,
    509,
    521,
    523,
    541,
    547,
    557,
    563,
    569,
    571,
    577,
    587,
    593,
    599,
    601,
    607,
    613,
    617,
    619,
    631,
    641,
    643,
    647,
    653,
    659,
    661,
    673,
    677,
    683,
    691,
    701,
    709,
    719,
    727,
    733,
    739,
    743,
    751,
    757,
    761,
    769,
    773,
    787,
    797,
    809,
    811,
    821,
    823,
    827,
    829,
    839,
    853,
    857,
    859,
    863,
    877,
    881,
    883,
    887,
    907,
    911,
    919,
    929,
    937,
    941,
    947,
    953,
    967,
    971,
    977,
    983,
    991,
    997]
let simples= [60, 168, 360, 504, 660]
let contadorpk =0
let contadorpq=0
let contadorp2q =0;
let contadorpqr = 0;

for (let i = 0; i < simples.length; i++) {
    document.querySelector(`.number${simples[i]}`).classList.add('amarelo');
    
}

for (let i= 0; i<primos.length; i++){
    numero = document.querySelector(`.number${primos[i]}`);
    numero.classList.add('verde');
    for (let j = 2; j < 10; j++) {
        if (primos[i]**j < 1000) {
            document.querySelector(`.number${primos[i]**j}`).classList.add('vermelho'); 
            contadorpk++
        }
           
    }

    for (let k = i+1; k < primos.length; k++) {
        //const element = primos[k];
        if (primos[i]*primos[k]<1000) {
            document.querySelector(`.number${primos[i]*primos[k]}`).classList.add('vermelho'); 
            contadorpq++
        }

        if ((primos[i]**2)*primos[k]<1000) {
            document.querySelector(`.number${(primos[i]**2)*primos[k]}`).classList.add('vermelho'); 
            contadorp2q++
        }

        for (let l = k+1; l < primos.length; l++) {
            if (primos[i]*primos[k]*primos[l]<1000) {
                document.querySelector(`.number${primos[i]*primos[k]*primos[l]}`).classList.add('vermelho'); 
                contadorpqr++
            }
            
        }

    }
}

