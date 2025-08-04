
function getAge(birth,death){
    const currentTime = new Date().getFullYear();
    if(!death){
        return  currentTime - birth;
    }
    return death - birth;
}

const findTheOldest = function(people) {
    const currentTime = new Date().getFullYear();
    let oldest = people.sort((p1,p2) => {
        //get their age up to present if yearOfDeath not avaible for one
        let age1 = getAge(p1.yearOfBirth,p1.yearOfDeath);
        let age2 = getAge(p2.yearOfBirth, p2.yearOfDeath);
        return age1 - age2;

    });

    //oldest should be at back
    return people[people.length - 1];
 
};

// Do not edit below this line
module.exports = findTheOldest;
