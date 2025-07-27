// Sample countries and cities data
const countries = [
    {
        name: "India",
        cities: ["Bangalore", "Mumbai", "Delhi", "Hyderabad", "Chennai"]
    },
    {
        name: "United States",
        cities: ["New York", "San Francisco", "Chicago", "Los Angeles", "Austin"]
    },
    {
        name: "United Kingdom",
        cities: ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow"]
    },
    {
        name: "Australia",
        cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"]
    },
    {
        name: "Canada",
        cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"]
    }
];

// Load countries and cities
function loadCountries() {
    const countryList = document.getElementById('countryList');
    
    if (countries.length === 0) {
        countryList.innerHTML = `
            <div class="no-chatrooms">
                <p>No countries available</p>
            </div>
        `;
        return;
    }
    
    countries.forEach(country => {
        const countryItem = document.createElement('div');
        countryItem.className = 'country-item';
        countryItem.innerHTML = `
            <span class="country-name">${country.name}</span>
            <i class="fas fa-chevron-right"></i>
        `;
        
        const cityList = document.createElement('div');
        cityList.className = 'city-list';
        cityList.id = `city-list-${country.name.replace(/\s+/g, '-').toLowerCase()}`;
        
        country.cities.forEach(city => {
            const cityItem = document.createElement('div');
            cityItem.className = 'city-item';
            cityItem.textContent = city;
            cityItem.addEventListener('click', () => openChatTypeModal(country.name, city));
            cityList.appendChild(cityItem);
        });
        
        countryItem.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const cityList = document.getElementById(`city-list-${country.name.replace(/\s+/g, '-').toLowerCase()}`);
            
            if (cityList.style.display === 'block') {
                cityList.style.display = 'none';
                icon.className = 'fas fa-chevron-right';
            } else {
                cityList.style.display = 'block';
                icon.className = 'fas fa-chevron-down';
            }
        });
        
        countryList.appendChild(countryItem);
        countryList.appendChild(cityList);
    });
}

// Open chat type selection modal
function openChatTypeModal(country, city) {
    const modal = document.getElementById('chatTypeModal');
    document.getElementById('openChatOption').onclick = function() {
        openChatRoom(country, city, 'open');
    };
    document.getElementById('moderatedChatOption').onclick = function() {
        openChatRoom(country, city, 'moderated');
    };
    modal.style.display = 'flex';
}

// Close chat type selection modal
document.getElementById('closeTypeModal').addEventListener('click', function() {
    document.getElementById('chatTypeModal').style.display = 'none';
});

// Open chat room
function openChatRoom(country, city, type) {
    const modal = document.getElementById('chatroomModal');
    const title = type === 'open' 
        ? `Open Chat: ${city}, ${country}`
        : `Moderated Chat: ${city}, ${country}`;
    
    document.getElementById('chatroomTitle').textContent = title;
    document.getElementById('chatTypeModal').style.display = 'none';
    modal.style.display = 'flex';
}

// Close chat room
document.getElementById('closeChatroom').addEventListener('click', function() {
    document.getElementById('chatroomModal').style.display = 'none';
});

// Send message
document.getElementById('sendMessageBtn').addEventListener('click', function() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        const messagesContainer = document.getElementById('chatMessages');
        const newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.innerHTML = `
            <img src="https://randomuser.me/api/portraits/men/32.jpg" class="message-user-img">
            <div class="message-content">
                <div class="message-user">You</div>
                <div class="message-text">${message}</div>
            </div>
        `;
        messagesContainer.appendChild(newMessage);
        input.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Simulate reply after 1 second
        setTimeout(() => {
            const replies = [
                "That's interesting!",
                "I agree with you.",
                "Thanks for sharing!",
                "Can you tell me more about that?",
                "That's helpful information."
            ];
            const randomReply = replies[Math.floor(Math.random() * replies.length)];
            const botMessage = document.createElement('div');
            botMessage.className = 'message';
            const botImage = Math.random() > 0.5 
                ? 'https://randomuser.me/api/portraits/women/33.jpg'
                : 'https://randomuser.me/api/portraits/men/45.jpg';
            const botName = Math.random() > 0.5 ? 'Priya' : 'Rahul';
            
            botMessage.innerHTML = `
                <img src="${botImage}" class="message-user-img">
                <div class="message-content">
                    <div class="message-user">${botName}</div>
                    <div class="message-text">${randomReply}</div>
                </div>
            `;
            messagesContainer.appendChild(botMessage);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 1000);
    }
});

// Allow sending message with Enter key
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('sendMessageBtn').click();
    }
});

// Create room button
document.getElementById('createRoomBtn').addEventListener('click', function() {
    alert('Create room functionality would open a form to create a new moderated chat room');
});

// Initialize the page
window.onload = function() {
    loadCountries();
};