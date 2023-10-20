document.addEventListener('DOMContentLoaded', function() {
    const userEmail = document.getElementById("user-email");
    const submitButton = document.getElementById('submitBtn');
    const alertText = document.getElementById('alertText');
    const errorImg = document.getElementById('errorImg');
    const gradientStop2 = document.getElementById('gradientStop2');
    
    let initialBorderColor = userEmail.style.border; // Store the initial border color

    function submitEmail(event) {
        event.preventDefault();
        userEmail.style.border = '1px solid #CE9898';
    }

    userEmail.addEventListener('click', submitEmail);

    function isValidEmail(email) {
        // A regular expression for a comprehensive email format
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    }

    function resetForm() {
        alertText.style.display = 'none';
        errorImg.style.display = 'none';
        gradientStop2.setAttribute('stop-color', '#EE8B8B');
        userEmail.style.border = initialBorderColor; // Restore the initial border color
    }

    function submit(event) {
        event.preventDefault();
        
        let userInput = userEmail.value;
        
        if (!isValidEmail(userInput)) {
            // The input is invalid; apply styles and show alerts
            alertText.style.display = 'block';
            errorImg.style.display = 'block';
            gradientStop2.setAttribute('stop-color', '#F8BFBF');
            userEmail.style.border = '2px solid #F96464';
        } else {
            // The input is a valid email; reset the form
            resetForm();
        }
    }

    submitButton.addEventListener('click', submit);

    // When the user modifies the email input, reset the form
    userEmail.addEventListener('input', resetForm);
});
