const reverseString = function(word) {
    let reverseString = "";
    for(let i = word.length-1; i >= 0; i--){
        reverseString += word[i];
    } 
    return reverseString;

};

let reversedString = reverseString("Hello, there!");
console.log(reversedString);

// Do not edit below this line
module.exports = reverseString;
