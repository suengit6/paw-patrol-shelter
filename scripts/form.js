function form() {
    // JavaScript to handle form steps
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("adoptionForm");
        const steps = form.querySelectorAll(".step");
        const stepNum = document.getElementsByClassName("stepNum");

        function showStep(stepNumber) {
            steps.forEach((step, index) => {
                step.style.display = index === stepNumber - 1 ? "block" : "none";
                stepNum[index].style.backgroundColor = index === stepNumber - 1 ? "pink" : "";
            });
        }

        const nextButtons = form.querySelectorAll(".next-step");
        const previousButtons = form.querySelectorAll(".previous-step");

        nextButtons.forEach((button) => {
            button.addEventListener("click", function (e) {
                e.preventDefault();
                const stepNumber = this.getAttribute("data-step");
                showStep(stepNumber);
            });
        });

        previousButtons.forEach((button) => {
            button.addEventListener("click", function (e) {
                e.preventDefault();
                const stepNumber = this.getAttribute("data-step");
                showStep(stepNumber);
            });
        });

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Check if any required fields are empty
            const requiredInputs = document.querySelectorAll("input[required], select[required], textarea[required]");
            let isFormValid = true;

            requiredInputs.forEach((input) => {
                if (input.value.trim() === "") {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Form is valid, process the submission (you can add your logic here)
                alert("Form submitted successfully!");
                window.location.replace("../webpages/adoptionComplete.html");
            } else {
                // Form is not valid, show an error alert and go back to the first step
                alert("Form is not complete. Please fill in all required fields.");
                showStep(1);
            }
        });

        showStep(1); // Show the first step initially
    });
}

form();
