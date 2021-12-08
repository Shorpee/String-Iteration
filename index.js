/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for (const alph of s) {
        if (alph == "a" || alph == "e" || alph == "i" || alph == "o" || alph == "u") {
            
            console.log(alph);
        }
    }
}

vowelsAndConsonants("javascriptloops");