function reversedstr(str) {
    let reversedstr = "0"
    for (let i = str.length - 1; i >= 0; i--) {
        reversedstr += str[i]
    }

    return reversedstr;
}
 
console.log(reversedstr('hello')); // c'est renverser les mots //


const fonctions = require("./fonctions.js");


let tab = [1, 2, 3, 4, 5];


let max = fonctions.trouverMaximum(tab);


console.log("require " + max); // cette fonction est pour faire des tableaux//


function factoriel(n) {

    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factoriel(n - 1); // ceci est une fonction factoriel//
}


function estPremier(n) {

    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {

            return false;
        }
    }

    return true;
}


function fibonacci(n) {

    let sequence = [];

    for (let i = 0; i < n; i++) {

        if (i === 0 || i === 1) {
            sequence.push(i);
        } else {

            sequence.push(sequence[i - 2] + sequence[i - 1]);
        }
    }

    return sequence;
}

  

