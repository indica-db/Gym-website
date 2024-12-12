document.getElementById('profile-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('profile-username').value;
    const email = document.getElementById('profile-email').value;

    const response = await fetch('/api/update-profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email }),
    });

    const result = await response.json();
    document.getElementById('profile-message').textContent = result.message;
});