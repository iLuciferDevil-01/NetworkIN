// Sample jobs data
const jobs = [
    {
        title: "Senior Marketing Manager",
        company: "Tech Solutions Inc",
        location: "Bangalore",
        type: "Full-time",
        experience: "5+ years",
        salary: "15-25 LPA",
        description: "We are looking for an experienced Marketing Manager to lead our marketing team. The ideal candidate will have experience in digital marketing, team management, and campaign strategy."
    },
    {
        title: "Product Designer",
        company: "Creative Minds",
        location: "Remote",
        type: "Contract",
        experience: "3+ years",
        salary: "10-15 LPA",
        description: "Join our design team to create beautiful and functional user interfaces. You'll work closely with product managers and engineers to deliver exceptional user experiences."
    },
    {
        title: "Data Analyst",
        company: "Analytics Pro",
        location: "Mumbai",
        type: "Full-time",
        experience: "2+ years",
        salary: "8-12 LPA",
        description: "We're seeking a Data Analyst to interpret data and turn it into information which can offer ways to improve our business. You'll gather information from various sources and interpret patterns and trends."
    },
    {
        title: "Frontend Developer",
        company: "Web Tech",
        location: "Hyderabad",
        type: "Full-time",
        experience: "1+ years",
        salary: "6-10 LPA",
        description: "Looking for a Frontend Developer proficient with React.js. Your primary focus will be on developing user interface components and implementing them following well-known workflows."
    },
    {
        title: "HR Manager",
        company: "People First",
        location: "Delhi",
        type: "Full-time",
        experience: "4+ years",
        salary: "12-18 LPA",
        description: "We are looking for an HR Manager to oversee all aspects of human resources practices and processes. You will support business needs and ensure the proper implementation of company strategy."
    }
];

// Function to load jobs
function loadJobs() {
    const container = document.getElementById('jobsContainer');
    
    if (jobs.length === 0) {
        container.innerHTML = `
            <div class="no-jobs">
                <p>No jobs found matching your criteria</p>
            </div>
        `;
        return;
    }
    
    jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job-item';
        jobElement.innerHTML = `
            <h2 class="job-title">${job.title}</h2>
            <div class="job-company">${job.company}</div>
            <div class="job-details">
                <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                <span><i class="fas fa-briefcase"></i> ${job.type}</span>
                <span><i class="fas fa-user-tie"></i> ${job.experience}</span>
                <span><i class="fas fa-rupee-sign"></i> ${job.salary}</span>
            </div>
            <div class="job-description">
                ${job.description}
            </div>
            <div class="job-actions">
                <button class="apply-btn">Apply</button>
                <button class="save-btn">Save</button>
            </div>
        `;
        container.appendChild(jobElement);
    });
}

// Initialize the page
window.onload = function() {
    loadJobs();
};