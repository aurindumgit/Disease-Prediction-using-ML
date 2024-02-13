function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');

    if (userInput.value.trim() !== '') {
        
        chatMessages.innerHTML += `<div class="user-message">${userInput.value}</div>`;
        
        
        const botResponse = "The first Neural Network was built in 1950.";
        chatMessages.innerHTML += `<div class="bot-message">${botResponse}</div>`;

        
        userInput.value = '';

        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const startTalkingHeader = document.getElementById('startTalkingHeader');
    const startTalkingText = "Start Talking :)";
    let index = 0;
    let typedText = "";

    function type() {
        typedText += startTalkingText[index];
        startTalkingHeader.innerText = typedText;
        index++;

        if (index < startTalkingText.length) {
            setTimeout(type, 200); 
        } else {
            
            index = 0;
            typedText = "";
            setTimeout(type, 2500); 
        }
    }

    
    type();
});

function toggleScrollbarColor() {
    const scrollbarThumb = document.querySelector('body::-webkit-scrollbar-thumb');

    
    if (scrollbarThumb.style.backgroundColor === 'black') {
        scrollbarThumb.style.backgroundColor = 'blue';
    } else {
        scrollbarThumb.style.backgroundColor = 'black';
    }
}
