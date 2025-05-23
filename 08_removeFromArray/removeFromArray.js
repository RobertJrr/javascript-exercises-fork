const removeFromArray = function(arr, ...args) {
    let newArr = [];

    arr.forEach(element => {
        //if element to remove NOT in args array, add that element to new array
        if(!args.includes(element)){
            newArr.push(element);
        }
    });

    return newArr;

    

    //REMOVING ONE ELEMENT
    // const index = arr.indexOf(elementToRemove);
    // //remove element
    // const removed = arr.splice(index,1);
    // return arr;

}

console.log(removeFromArray([1,2,3,4],3,2,1));


// Do not edit below this line
module.exports = removeFromArray;
