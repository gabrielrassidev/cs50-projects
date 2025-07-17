document.addEventListener("DOMContentLoaded", function () {

    // MULTIPLE CHOICE QUESTION
    const mcButtons = document.querySelectorAll(".section:nth-of-type(1) button");
    mcButtons.forEach(button => {
        button.addEventListener("click", function () {
            const feedback = document.querySelector("#feedback");

            // Reset all button styles
            mcButtons.forEach(b => b.style.backgroundColor = "");

            if (button.innerText === "Brasilia") {
                feedback.innerText = "Correct!";
                feedback.style.color = "green";
                button.style.backgroundColor = "lightgreen";
                button.classList.add("correct");
                setTimeout(() => button.classList.remove("correct"), 500);
            } else {
                feedback.innerText = "Incorrect";
                feedback.style.color = "red";
                button.style.backgroundColor = "lightcoral";
                button.classList.add("incorrect");
                setTimeout(() => button.classList.remove("incorrect"), 500);
            }
        });
    });

    // FREE RESPONSE QUESTION
    document.querySelector("#check-answer").addEventListener("click", function () {
        const input = document.querySelector("#free-response");
        const feedback = document.querySelector("#free-feedback");
        const answer = input.value.trim().toLowerCase();

        if (answer === "brazil") {
            input.style.backgroundColor = "lightgreen";
            feedback.innerText = "Correct!";
            feedback.style.color = "green";
            button.classList.add("correct");
            setTimeout(() => button.classList.remove("correct"), 500);
        } else {
            input.style.backgroundColor = "lightcoral";
            feedback.innerText = "Incorrect";
            feedback.style.color = "red";
            button.classList.add("incorrect");
            setTimeout(() => button.classList.remove("incorrect"), 500);
        }
    });

    // TRUE/FALSE QUESTION
    const tfButtons = document.querySelectorAll(".tf");
    tfButtons.forEach(button => {
        button.addEventListener("click", function () {
            const feedback = document.querySelector("#tf-feedback");

            // Reset all tf button styles
            tfButtons.forEach(b => b.style.backgroundColor = "");

            if (button.innerText === "False") {
                feedback.innerText = "Correct!";
                feedback.style.color = "green";
                button.style.backgroundColor = "lightgreen";
                button.classList.add("correct");
                setTimeout(() => button.classList.remove("correct"), 500);
            } else {
                feedback.innerText = "Incorrect";
                feedback.style.color = "red";
                button.style.backgroundColor = "lightcoral";
                button.classList.add("incorrect");
                setTimeout(() => button.classList.remove("incorrect"), 500);
            }
        });
    });
});

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
