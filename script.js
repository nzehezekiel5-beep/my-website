alert("Welcome to GraceFave Int'l!");

let name = "GraceFave";

if (name === "GraceFave") {
    console.log("Hello GraceFave");
}


function greet() {
    console.log("Hello!");
}

greet();


const learnButton = document.getElementById("learnButton");

const heroText = document.getElementById("heroText");


learnButton.addEventListener("click", function () {

    heroText.textContent = "Thanks for visiting GraceFave Int'l School!";

});
