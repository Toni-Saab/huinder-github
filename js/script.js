document.getElementById('blinkButton').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('personData').addEventListener('submit', function(event) {
    event.preventDefault();
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
}
)

function changeStatusForCard(status, label) {
    const isOnline = Math.random() > 0.5;
    status.classList.toggle('status--online', isOnline);
    label.textContent = isOnline ? 'online' : 'offline';
}

document.querySelectorAll('.card').forEach(card => {
    const status = card.querySelector('.status');
    const label = card.querySelector('.status-label');

    setInterval(() => {
        changeStatusForCard(status, label);
    }, Math.floor(Math.random() * (10000 - 4000 + 1)) + 4000);
});