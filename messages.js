// Sample messages data
const messages = [
    {
        user: {
            name: "Sarah Williams",
            img: "https://randomuser.me/api/portraits/women/33.jpg"
        },
        preview: "Hi there! I saw your post about marketing strategies...",
        time: "10:30 AM"
    },
    {
        user: {
            name: "Mike Johnson",
            img: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        preview: "Thanks for connecting! Let me know if you'd like to...",
        time: "Yesterday"
    },
    {
        user: {
            name: "Emma Davis",
            img: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        preview: "The meeting is scheduled for tomorrow at 2 PM...",
        time: "Jul 12"
    },
    {
        user: {
            name: "Alex Turner",
            img: "https://randomuser.me/api/portraits/men/75.jpg"
        },
        preview: "I've reviewed your proposal and it looks great...",
        time: "Jul 10"
    },
    {
        user: {
            name: "Lisa Ray",
            img: "https://randomuser.me/api/portraits/women/25.jpg"
        },
        preview: "Can you send me those files we discussed?",
        time: "Jul 8"
    }
];

// Function to load messages
function loadMessages() {
    const container = document.getElementById('messagesContainer');
    
    if (messages.length === 0) {
        container.innerHTML = `
            <div class="no-messages">
                <p>No messages yet</p>
            </div>
        `;
        return;
    }
    
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message-item';
        messageElement.innerHTML = `
            <img src="${message.user.img}" alt="${message.user.name}" class="message-img">
            <div class="message-content">
                <div class="message-user">${message.user.name}</div>
                <div class="message-preview">${message.preview}</div>
            </div>
            <div class="message-time">${message.time}</div>
        `;
        container.appendChild(messageElement);
    });
}

// Initialize the page
window.onload = function() {
    loadMessages();
};