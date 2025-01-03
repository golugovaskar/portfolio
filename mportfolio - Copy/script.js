var typed = new Typed(".typing",{
    strings:["","Web Developer", "UI/UX Designer","web designer", "Graphic Designer", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Collect form data
        const formData = new FormData(form);

        // Convert FormData to a JSON object
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        try {
            // Send the form data using the fetch API
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jsonData),
            });

            if (response.ok) {
                // Show success message or redirect
                alert("Message sent successfully!");
                form.reset(); // Clear the form fields
            } else {
                // Show error message
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("An error occurred. Please check your network connection.");
        }
    });
});