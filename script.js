document.addEventListener('DOMContentLoaded', function() {
    
    const ipButton = document.getElementById('ip-copy-btn');
    
    if (ipButton) {
        ipButton.addEventListener('click', function() {
            // Get the IP from the 'data-ip' attribute
            const serverIP = ipButton.getAttribute('data-ip');
            
            // Use the modern Clipboard API
            navigator.clipboard.writeText(serverIP).then(() => {
                
                // --- Visual Feedback ---
                // Temporarily change the button text
                const originalText = ipButton.querySelector('span').textContent;
                ipButton.querySelector('span').textContent = 'Copied!';
                
                // Change it back after 2 seconds
                setTimeout(() => {
                    ipButton.querySelector('span').textContent = originalText;
                }, 2000);

            }).catch(err => {
                console.error('Failed to copy IP: ', err);
                // You could show an error message here
            });
        });
    }

});