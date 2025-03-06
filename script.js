document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("greetings");
    const descriptionElement = document.getElementById("description");
    const contentElement = document.getElementById("content");

    const text = "Hi, I'm Saranya Satheesh";
    let index = 0;
    const typingSpeed = 100;

    function typeEffect() {
        if (index < text.length) {
            greetingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            descriptionElement.classList.remove("hidden");
            descriptionElement.classList.add("fade-in");

            setTimeout(() => {
                contentElement.classList.remove("hidden");
                contentElement.classList.add("fade-in");
            }, 1000); 
        }
    }

    
    greetingElement.innerHTML = "";
    typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("ease-in");
        }, index * 300);
    });
});


document.addEventListener("DOMContentLoaded", function () {
   
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, index * 300); 
    });

  
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("feedback");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        feedback.classList.remove("hidden");
        form.reset();
        setTimeout(() => {
            feedback.classList.add("hidden");
        }, 5000);
    });
});
