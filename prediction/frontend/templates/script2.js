function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');

    if (userInput.value.trim() !== '') {
        
        chatMessages.innerHTML += <div class="user-message">${userInput.value}</div>;

        // Send input to Flask server
        fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ symptoms: userInput.value }),
        })
        .then(response => response.json())
        .then(data => {
            // Display model predictions
            chatMessages.innerHTML += <div class="bot-message">${data.final_prediction}</div>;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        })
        .catch(error => {
            console.error('Error:', error);
        });

        userInput.value = '';
}
}
