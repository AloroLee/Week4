function displaymailinglabel(name,address,city,state,zip){
    if(name){
        console.log(`${name}`);
    }
    if(address){
        console.log(`${address}`);
    }
    if(city){
        console.log(`${city}`);
    }
    if(state){
        console.log(`${state}`);
    }
    if(zip){
        console.log(`${zip}`);
    }
}
displaymailinglabel("lee")
displaymailinglabel("423 longhorn road")
displaymailinglabel("lynchburg")
displaymailinglabel("Virginia")
displaymailinglabel("40467")

// function add(a,b){
//     let result = a + b;
//     console.log(result)
// }
// add(6,7)

function add(a,b){
    let result = a + b;
    return result;
}
const result = add(6,7)
console.log(result)

function getReceipt (amountPaid, changeDue){
    const total = 100;
    // const text = amountPaid + ", " + changeDue
   const text = `
Amount PAID: ${amountPaid}
CHANGE DUE: ${changeDue}
TOTAL: ${total}
   `;
    return text;
}

console.log(getReceipt(10,3))