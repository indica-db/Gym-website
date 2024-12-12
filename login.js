document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        const messageElement = document.getElementById('login-message');

        if (response.ok) {
            messageElement.textContent = 'Login successful!';
            // Redirect to another page or perform other actions
            window.location.href = 'index.html'; // Redirect to the main page
        } else {
            messageElement.textContent = result.message || 'Login failed. Please try again.';
        }
    });
});