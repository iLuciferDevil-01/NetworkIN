// Toggle profile dropdown
document.getElementById('profileDropdownBtn').addEventListener('click', function() {
    document.getElementById('profileDropdown').classList.toggle('show');
});

// Close dropdown when clicking outside
window.addEventListener('click', function(event) {
    if (!event.target.matches('#profileDropdownBtn') && !event.target.matches('#profileDropdownBtn *')) {
        const dropdown = document.getElementById('profileDropdown');
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
});

// Show selected tab
function showTab(tabId) {
    // Hide all tab contents and remove active class from tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab and set active class
    document.getElementById(tabId + '-tab').classList.add('active');
    document.querySelectorAll('.profile-tab').forEach(tab => {
        if (tab.textContent.toLowerCase().includes(tabId.replace('-', ' '))) {
            tab.classList.add('active');
        }
    });
    
    // Close dropdown if open
    document.getElementById('profileDropdown').classList.remove('show');
}

// Toggle edit mode for sections
function toggleEdit(section) {
    const textElement = document.getElementById(section + 'Text') || document.getElementById(section + 'List');
    const formElement = document.getElementById(section + 'EditForm');
    
    textElement.style.display = textElement.style.display === 'none' ? 'block' : 'none';
    formElement.style.display = formElement.style.display === 'none' ? 'block' : 'none';
}

// Cancel edit
function cancelEdit(section) {
    toggleEdit(section);
}

// Save edit
function saveEdit(section) {
    if (section === 'about') {
        const newAbout = document.getElementById('aboutInput').value;
        document.getElementById('aboutText').textContent = newAbout;
    }
    toggleEdit(section);
    alert('Changes saved successfully!');
}

// Initialize the page
window.onload = function() {
    // Check URL for tab parameter
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    
    if (tab === 'posts') {
        showTab('my-posts');
    } else if (tab === 'languages') {
        showTab('languages');
    } else if (tab === 'settings') {
        showTab('settings');
    } else if (urlParams.get('edit') === 'true') {
        // If edit=true in URL, open profile in edit mode
        toggleEdit('about');
        toggleEdit('experience');
        toggleEdit('education');
    }
};