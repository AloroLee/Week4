function getDays(when){
    const now = new Date();
    const diff = when.getTime() - now.getTime()
    const msPerDay = 1000 * 60 * 60 * 24;
    const days = diff / msPerDay;
    const rounded = Math.ceil(days);
    // let text ="";
    // if(round ===1){
    //     text = "day";
    // }else{
    //     text = "days"
    // }
    // could use #14 to replace boolean code 
    let text = rounded ===1 ? " day" : " days";

    return rounded + text;
}

document.addEventListener("DOMContentLoaded", () => {
    
    submitDate.addEventListener("click", () => {
        const when = new Date(travelDate.value);
        daysMessage.innerText = getDays(when);
    });
    
});

//    Document.body.style = "color: red; background-color: yellow";