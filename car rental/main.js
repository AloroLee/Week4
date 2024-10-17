function getReceipt(days, wantsToll, wantsGPS, wantsRoadSide, isUnderAge) {
    const rentalDay = 29.99;
    const surchargePercent = .30;
    let surchargeAmount = 0;
    let carRental = rentalDay * days;
    if(isUnderAge){
        surchargeAmount = surchargePercent * carRental;
        // carRental = carRental + surchargeAmount;
        carRental += surchargeAmount; // Cool
    }
    let optionsSubtotal = 0;
    if(wantsToll){
        optionsSubtotal += 3.95 * days;
    }
    if(wantsGPS){
        optionsSubtotal += 2.95 * days;
    }
    if(wantsRoadSide){
        optionsSubtotal += 2.95 * days;
    }

    const grandTotal = (carRental + optionsSubtotal + surchargeAmount).toFixed(2);
    return `
        Car rental: ${carRental.toFixed(2)}
           Options: ${optionsSubtotal.toFixed(2)}
Under 25 surcharge: ${surchargeAmount.toFixed(2)}

         Total Due: ${grandTotal}
    `;
}
document.addEventListener("DOMContentLoaded", () => {
    const pickupDate = document.getElementById("pickupDate");
    const numberofDays = document.getElementById("numberofDays");

    const tollTag = document.getElementById("tollTag");
    const gps = document.getElementById("gps");
    const roadside = document.getElementById("roadside");

    const notUnder = document.getElementById("notUnder");
    const isUnder = document.getElementById("isUnder");

    const estimateButton = document.getElementById("estimateButton");

    const receiptOutput = document.getElementById("receiptOutput");

    estimateButton.addEventListener("click", () => {
        receiptOutput.innerText = getReceipt(
            numberofDays.value,
            tollTag.checked,
            gps.checked,
            roadside.checked,
            isUnder.checked
        );
    });

}); //end dom content loaded