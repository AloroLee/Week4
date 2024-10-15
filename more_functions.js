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