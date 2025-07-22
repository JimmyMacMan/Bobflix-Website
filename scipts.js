const url = "https://ac.bobflix.uk";
fetch("https://ac.bobflix.uk")
    .then(response => response.text())
    .then(text => {
        if (text.includes("Bad gateway")) {
            document.getElementById('ac-status').textContent = 'Offline';
            document.getElementById('ac-status').style.color = '#ff4444';
        } else {
            document.getElementById('ac-status').textContent = 'Online';
            document.getElementById('ac-status').style.color = '#00e676';
        }
    })
    .catch(() => {
        document.getElementById('ac-status').textContent = 'Offline';
        document.getElementById('ac-status').style.color = '#ff4444';
    });

    