function selectDropdown(){
    const paymentDropdown = document.getElementById("payment");
    const paymentInfo = document.getElementById("payment-info");

    paymentDropdown.addEventListener("change", function () {
        const selectedOption = paymentDropdown.value;
        if (selectedOption === "gcash") {
            paymentInfo.textContent = "Phone Number: 09999999999, Account Name: Paw Patrol Shelter";
        } else if (selectedOption === "paypal") {
            paymentInfo.textContent = "Account Number: 1234-1234-1234-1234";
        } else {
            paymentInfo.textContent = "Select a payment method to see the details.";
        }
    });
}
selectDropdown();