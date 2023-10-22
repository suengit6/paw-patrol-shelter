function filterDog(){
    const jsDog = document.getElementById("dog");
    const jsCat = document.getElementById("cat");
    jsDog.style.backgroundColor = "pink";
    jsCat.style.backgroundColor = "buttonface";
    window.location.replace("../webpages/animalsList.html")
}

function filterCat(){
    const jsDog = document.getElementById("dog");
    const jsCat = document.getElementById("cat");
    jsCat.style.backgroundColor = "pink";
    jsDog.style.backgroundColor = "buttonface";
    window.location.replace("../webpages/animalsListcats.html")

}