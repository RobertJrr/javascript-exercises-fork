const sumAll = function(min, max) {
    

    if(min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR";
    }
    let sum = 0;

    //switch max and min
    if(min > max){
        temp = max;
        max = min;
        min = temp;
    }
    //for loop to sum
    for(let i = min; i <= max; i++){
        sum += i;
    }
    //return sum
    return sum;

};

console.log(sumAll(1,2,3,4));

// Do not edit below this line
module.exports = sumAll;
