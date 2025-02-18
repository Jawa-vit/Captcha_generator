const display = document.getElementById("_status");
const submit = document.getElementById("_submit");
const refresh = document.getElementById("_Refresh");
const clientInput = document.getElementById("_client-text"); // FIX: Defined input field

const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let captcha = "";

// Function to generate a new CAPTCHA
function generateCaptcha() {
    captcha = ""; // Reset captcha before generating a new one

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        captcha += char[randomIndex];
    }
    
    document.getElementById("_Generator").value = captcha;
    display.innerText = "Captcha Generator";
    display.style.color = "black"; // Reset text color
}

// Load CAPTCHA when the page loads
window.addEventListener("load", generateCaptcha);

// Submit button event listener
submit.addEventListener("click", function () {
    const input = clientInput.value; // FIX: Defined input field

    if (input === "") {
        display.innerText = "⚠️ Please enter the text shown below!";
        display.style.color = "orange";
    } else if (input === captcha) { // Compare with the latest generated captcha
        display.innerText = "✅ Matched!";
        display.style.color = "green";
    } else {
        display.innerText = "❌ Not Matched!";
        display.style.color = "red";
    }
});

// Refresh button event listener
refresh.addEventListener("click", function () {
    generateCaptcha(); // Generate a new CAPTCHA
    clientInput.value = ""; // Clear the input field
    display.innerText = "Captcha Generator"; // Reset status
    display.style.color = "black";
});
