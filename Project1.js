// JavaScript source code
console.log("This Program gives one randomized sentence. "); 


function getRandom () {
let number = Math.floor(Math.random() * 6);

return number; }

const article3 = ['the', 'a' , 'one', 'some', 'my', 'our'];
const article = ['The', 'A' , 'One', 'Some', 'My', 'Our'];
const noun =['brother', 'sister', 'mother', 'dog', 'cat', 'iguana'];
const verb = ['skipped','jumped','ran','walked','found','gave'];
const preposition = ['to', 'from', 'over','under','on','around'];


let article1 = getRandom(); 
let noun1 = getRandom(); 
let verb1 = getRandom(); 
let preposition1 = getRandom(); 
let article2 = getRandom(); 
let noun2 = getRandom(); 



console.log(`${article[article1]} ${noun[noun1]} ${verb[verb1]} ${preposition[preposition1]} ${article3[article2]} ${noun[noun2]} `);