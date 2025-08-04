const getTheTitles = function(books) {

    
    const titles = books.map((book) => book.title);
    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;

//going through book array (which is an array of book objects containing below)
//use map function which returns an array and uses a callback function 
// to get title of each book object

//const books = [
//   {
//     title: 'Book',
//     author: 'Name'
//   },
//   {
//     title: 'Book2',
//     author: 'Name2'
//   }
// ]