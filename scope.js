eilish = "billie" //global scope variable (name)

// local
// gloabl 

function classRoom(){
    let firstname = "lee" //block scope and if (let) is not applied to make it explicit might as well be out the block
    console.log(firstname + " is a player")
    console.log(firstname + " likes to play ball with" + eilish) //eilish is a global name
}//end block

//without the let, the firstname will apply gloablly
classRoom();

console.log(eilish + " has a nice hat")

//firstname does not exist in the globalscopy
console.log(firstname + "is our king") //firstname is not defined