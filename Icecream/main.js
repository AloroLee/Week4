function getReceipt(
    numberOfScoops,
    isCup,
    wantsSprinkles,
    wantsWhipped,
    wantsFudge,
    wantsCherry
){
    const taxRate = 0.08;
    const basePrice = 1.08;
    const costPerScoop = 1.25;
    console.log(arguments);
    let total = basePrice + (costPerScoop * numberOfScoops);
    if(isCup){
        if(wantsSprinkles){
            total += 0.5
        }
        if(wantsWhipped){
            total += 0.25
        }
        if(wantsFudge){
            total += 1.25
        }
        if(wantsCherry){
            total += 0.25
        }
    }
    const taxAmount = total * taxRate;
    const totalDue = total + taxAmount;
    return `
        Base Price:$${total.toFixed(2)}
        Tax: $${taxAmount}
        Total Due: $${totalDue}
    `;
}


function onContainerClicked(e){
    toppings.style.display = cup.checked ? "block" : "none";
}
document.addEventListener("DOMContentLoaded", () => {
    const scoops = document.getElementById("scoops")
    const cup = document.getElementById("cup")
    const cone = document.getElementById("cone")
    const sprinkles = document.getElementById("sprinkles")
    const whipped = document.getElementById("whipped")
    const fudge = document.getElementById("fudge")
    const cherry = document.getElementById("cherry")

    cup.addEventListener("click", onContainerClicked);
    cone.addEventListener("click", onContainerClicked);

    submitOrder.addEventListener("click", () =>{
        outputReceipt.innerText = getReceipt(
            Number(scoops.value), 
            cup.checked,
            sprinkles.checked,
            whipped.checked,
            fudge.checked,
            cherry.checked

        );
    })
});
