// Sample walkins data
const walkins = [
    {
        title: "Software Engineer Walkin",
        company: "Tech Solutions Inc",
        location: "Bangalore, Koramangala",
        date: "Today - Tomorrow",
        time: "10 AM - 4 PM",
        description: "Walkin interview for Software Engineers with 2+ years of experience in Java and Spring Boot. Please bring your updated resume and ID proof.",
        distance: "2.5 km away"
    },
    {
        title: "Marketing Executive Walkin",
        company: "Brand Co",
        location: "Bangalore, MG Road",
        date: "Tomorrow",
        time: "11 AM - 3 PM",
        description: "Looking for Marketing Executives with excellent communication skills. Freshers can also apply.",
        distance: "5 km away"
    },
    {
        title: "Customer Support Walkin",
        company: "Service Pro",
        location: "Bangalore, Whitefield",
        date: "Today",
        time: "9 AM - 1 PM",
        description: "Immediate hiring for Customer Support Executives. Good communication skills in English required.",
        distance: "8 km away"
    }
];

// Function to load walkins
function loadWalkins() {
    const container = document.getElementById('walkinsContainer');
    
    if (walkins.length === 0) {
        container.innerHTML = `
            <div class="no-walkins">
                <p>No walkins found in your area</p>
            </div>
        `;
        return;
    }
    
    walkins.forEach(walkin => {
        const walkinElement = document.createElement('div');
        walkinElement.className = 'walkin-item';
        walkinElement.innerHTML = `
            <h2 class="walkin-title">${walkin.title}</h2>
            <div class="walkin-company">${walkin.company}</div>
            <div class="walkin-details">
                <span><i class="fas fa-map-marker-alt"></i> ${walkin.location}</span>
                <span><i class="fas fa-calendar-alt"></i> ${walkin.date}</span>
                <span><i class="fas fa-clock"></i> ${walkin.time}</span>
                <span><i class="fas fa-route"></i> ${walkin.distance}</span>
            </div>
            <div class="walkin-description">
                ${walkin.description}
            </div>
            <div class="walkin-actions">
                <button class="apply-btn">Apply</button>
                <button class="save-btn">Save</button>
            </div>
        `;
        container.appendChild(walkinElement);
    });
}

// Initialize the page
window.onload = function() {
    loadWalkins();
};