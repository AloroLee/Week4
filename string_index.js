//                1111111111222222222223333333
//      01234567890123456789012345678901234567
text = "Now is the time for all good people..."
index = text.indexOf(" ")
console.log(index)
console.log(text.length)
firstDot = text.indexOf(".")
console.log(firstDot)

nPosition = text.indexOf("N")
console.log(nPosition)

zPosition = text.indexOf("z")
console.log(zPosition) // -1 not found
console.log(text.charCodeAt(0)) //78? 65+13=78 ASCII

console.log(String.fromCharCode(66)) //? B

console.log("L".charCodeAt(0))
console.log("E".charCodeAt(0))
console.log("E".charCodeAt(0))

console.log("l".charCodeAt(0))
console.log("e".charCodeAt(0))
console.log("e".charCodeAt(0))