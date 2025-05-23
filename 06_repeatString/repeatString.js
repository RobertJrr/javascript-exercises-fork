const repeatString = function(word,times) {
    while(times > 0){
        process.stdout.write(word);
        times--;
    }
};

const repeatStringBetter = function(word,times){

    let string = "";
    for(let i = 0; i < times; i++){
        string += word;
    }

    console.log(string);
}

// repeatString('hey',3);
repeatStringBetter('hey',3);


// Do not edit below this line
module.exports = repeatString;
