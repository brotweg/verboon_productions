const usernameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message')

// sla de referenties op naar de warning-messages
const usernameWarning = document.getElementById('username-warning');
const emailWarning = document.getElementById('password-warning');
const messageWarning = document.getElementById('message-warning')

// voeg eventlisteners toe op de inputvelden
usernameInput.addEventListener('keyup', checkUsername);
emailInput.addEventListener('keyup', checkEmail);
messageInput.addEventListener('keyup', checkMessage)

// maak een functie die de username input checkt en door de event listener wordt aangeroepen
function checkUsername(e) {
    // Wanneer de waarde een @ bevat willen we de melding WEL tonen
    if (e.target.value === '') {
        usernameWarning.textContent = 'Please fill in a name.';
    } else {
        // in alle andere gevallen tonen we de melding NIET
        usernameWarning.textContent = '';
    }
}

// maak een functie die de password input checkt en door de event listener wordt aangeroepen
function checkEmail (e) {
    // Als het invoerveld leeg is, of wanneer het wachtwoord lang genoeg is willen we de melding NIET tonen
    if (e.target.value === '' || !e.target.value.includes('@')) {
        emailWarning.textContent = 'Please provide an email-address.';
    } else {
        // in alle andere gevallen (e.target.value !== '' && e.target.value.length <= 6) tonen we de melding WEL
        emailWarning.textContent = '';
    }
}

function checkMessage(e) {
    if (e.target.value.length <= 10) {
        messageWarning.textContent = 'Your message must be at least 10 characters long.';
    } else {
        messageWarning.textContent = '';
    }
}