function oneTime() {
    const oneTimeElements = document.getElementsByClassName("oneTime");
    const monthlyElements = document.getElementsByClassName("monthly");

    for (let i = 0; i < oneTimeElements.length; i++) {
        oneTimeElements[i].style.backgroundColor = "pink";
    }

    for (let i = 0; i < monthlyElements.length; i++) {
        monthlyElements[i].style.backgroundColor = "buttonface";
    }
}

function monthly() {
    const oneTimeElements = document.getElementsByClassName("oneTime");
    const monthlyElements = document.getElementsByClassName("monthly");

    for (let i = 0; i < oneTimeElements.length; i++) {
        oneTimeElements[i].style.backgroundColor = "buttonface";
    }

    for (let i = 0; i < monthlyElements.length; i++) {
        monthlyElements[i].style.backgroundColor = "pink";
    }
}
