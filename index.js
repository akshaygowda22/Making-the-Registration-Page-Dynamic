// public/scripts.js
function submitForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = {
        username: username,
        email: email,
        password: password
    };

    // You can use fetch or another AJAX library here to send the data to the server
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success, e.g., redirect to a new page
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
