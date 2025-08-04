const palindromes = function (word) {

    //modifying word to remove whitespace and commas and making lowercase
    word = word.toLowerCase().replaceAll(" ","").replaceAll(",","");    
    //getting other half of word to compare to
    let j = word.length - 1;
    if(word[j] === "!" || word[j] === "?" || word[j] === "."){
        //if final char is a punctation, move to next
        j--;
    }

    //compare each letter
    for(let i = 0; i < Math.floor(word.length / 2); i++){
        //if not equal, return false
        if(word[i] !== word[j]){
            return false;
        }
        j--;
    }
    //return true if palindrome
    return true;

};

// better
// const palindromes2 = function(word){
//     //string
//     const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

//     //first lowercase
//     let cleanedString = word.toLowerCase()
//     //then split into an array of characters
//     .split('')
//     //filter out any characters not in alphanumerical
//     .filter((character) => alphanumerical.includes(character))
//     //join them bac into one string
//     .join('');

//     let reversedString = cleanedString.split('').reverse().join(''); //split into array since reverse method works for arrays only

//     return cleanedString === reversedString;
    

// }

// Do not edit below this line
module.exports = palindromes;
