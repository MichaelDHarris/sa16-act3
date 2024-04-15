const form = document.getElementById('contactform');
const uninput = document.getElementById('name');
const emailinput = document.getElementById('email');
const pwinput = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    const email = emailinput.value.trim();
    const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailregex.email) {
        document.getElementById('emailError').textContent = 'Invalid email';
        isValid = false;
    }
}