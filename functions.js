// give a name to a step - like TOC or book outline 

function begin () {
    console.log("IN THE BEGINNING....");
}
function middle(){
    console.log("INTO THE HEART OF CODING...")
}
function end(){
    console.log("WRAPPING IT UP. Fini..")
}
function end2(){
    return "WRAPPING IT UP. Fini.."
}
console.log(end2())

// invoke or call 
begin ()
middle ()
end ()

function greet (who, age){
    console.log(`Howdy ${who}!!!`) // whenever you want your express $who acknowlegde you must add back-tick(``)
    // console.log("Howdy " + who + "!!!"); or you can use this as well #20
    if(age >=40){
        console.log("Gosh you are old!!!");
    }else{
        console.log("All the time in the world.")
    }
}
greet("kelvin", 57)
greet("class", 30)

console.log (new Date());