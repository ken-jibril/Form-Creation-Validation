const form = document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form')

    form.addEventListener('submit', function (event){
        event.preventDefault();
        
        const feedbackDiv = document.getElementById('form-feedback')

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        let messages = [];

        if (username.length < 3 ) {
            isValid = false;
            messages.push = ('Your name should be atleast 3 characters long')
        }

        if (!email.includes("@") || !email.includes(".")) {
          isValid = false;
          messages.push("Email must include '@' and '.'.");
        }
         if (password.length < 8) {
          isValid = false;
          messages.push("Password must be at least 8 characters.");
        }

         feedbackDiv.style.display = "block";
         
         if (isValid) {
          feedbackDiv.textContent = "Registration successful!";
          feedbackDiv.style.color = "#28a745";
        } else {
          feedbackDiv.innerHTML = messages.join("<br>");
          feedbackDiv.style.color = "#dc3545";
        }
    });
});