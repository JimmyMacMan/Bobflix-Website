fetch('https://ac.bobflix.uk/', { mode: 'no-cors' })
            .then(() => {
                document.getElementById('ac-status').textContent = 'Online';
                document.getElementById('ac-status').style.color = '#00e676';
            })
            .catch(() => {
                document.getElementById('ac-status').textContent = 'Offline';
                document.getElementById('ac-status').style.color = '#ff4444';
            });