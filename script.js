alert("Welcome to GraceFave Int'l!");

let name = "GraceFave";

if (name === "GraceFave") {
    console.log("Hello GraceFave");
}


function greet() {
    console.log("Hello!");
}

greet();

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

const learnButton = document.getElementById("learnButton");

const heroText = document.getElementById("heroText");

const contactForm = document.getElementById("contactForm");

learnButton.addEventListener("click", function () {

    heroText.textContent = "Thanks for visiting GraceFave Int'l School!";


const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const schoolWhatsApp = "2347071151916";

        const whatsappMessage =
            "Hello GraceFave Int'l School!\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n" +
            "Subject: " + subject + "\n" +
            "Message: " + message;

        const whatsappURL =
            "https://wa.me/" + schoolWhatsApp +
            "?text=" + encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });

});
