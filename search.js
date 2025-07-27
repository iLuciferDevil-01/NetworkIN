// Sample search data
const searchData = {
    posts: [
        {
            content: "Just published a new marketing strategy that increased our engagement by 45%",
            author: "Sarah Williams",
            authorImg: "https://randomuser.me/api/portraits/women/33.jpg",
            time: "2 days ago",
            likes: 24,
            comments: 5
        },
        {
            content: "Looking for marketing professionals with experience in digital campaigns",
            author: "Mike Johnson",
            authorImg: "https://randomuser.me/api/portraits/men/45.jpg",
            time: "1 week ago",
            likes: 12,
            comments: 3
        }
    ],
    jobs: [
        {
            title: "Marketing Manager",
            company: "Tech Solutions Inc",
            location: "Bangalore",
            type: "Full-time",
            posted: "1 day ago"
        },
        {
            title: "Digital Marketing Specialist",
            company: "Creative Minds",
            location: "Remote",
            type: "Contract",
            posted: "3 days ago"
        }
    ],
    accounts: [
        {
            name: "Marketing Pro",
            title: "Marketing Consultant",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            connections: "500+"
        },
        {
            name: "Digital Marketer",
            title: "Head of Marketing at Brand Co",
            img: "https://randomuser.me/api/portraits/men/22.jpg",
            connections: "1,000+"
        }
    ],
    companies: [
        {
            name: "Marketing Solutions Ltd",
            industry: "Marketing Services",
            employees: "500-1,000",
            logo: "https://logo.clearbit.com/marketingsolutions.com"
        },
        {
            name: "Digital Marketing Pro",
            industry: "Digital Marketing",
            employees: "50-200",
            logo: "https://logo.clearbit.com/digitalmarketingpro.com"
        }
    ],
    groups: [
        {
            name: "Marketing Professionals Network",
            members: "5,000+",
            category: "Marketing"
        },
        {
            name: "Digital Marketing India",
            members: "10,000+",
            category: "Digital Marketing"
        }
    ],
    services: [
        {
            name: "Social Media Marketing",
            provider: "Media Solutions",
            rating: "4.8/5"
        },
        {
            name: "SEO Marketing Services",
            provider: "Web Rank Pros",
            rating: "4.5/5"
        }
    ]
};

// Function to load search results
function loadSearchResults(searchQuery) {
    document.getElementById('searchTerm').textContent = searchQuery;
    
    // Clear previous results
    document.getElementById('allResults').innerHTML = '';
    document.getElementById('postsResults').innerHTML = '';
    document.getElementById('jobsResults').innerHTML = '';
    document.getElementById('accountsResults').innerHTML = '';
    document.getElementById('companiesResults').innerHTML = '';
    document.getElementById('groupsResults').innerHTML = '';
    document.getElementById('servicesResults').innerHTML = '';
    
    if (!searchQuery.trim()) {
        document.getElementById('allResults').innerHTML = `
            <div class="no-results">
                <p>Please enter a search term</p>
            </div>
        `;
        return;
    }
    
    // Filter and display results that match the search query
    const query = searchQuery.toLowerCase();
    
    // Load all results
    loadResults('all', query);
    
    // Load filtered results
    loadResults('posts', query);
    loadResults('jobs', query);
    loadResults('accounts', query);
    loadResults('companies', query);
    loadResults('groups', query);
    loadResults('services', query);
}

// Function to load results for a specific filter
function loadResults(filter, query) {
    const container = document.getElementById(filter === 'all' ? 'allResults' : `${filter}Results`);
    
    if (filter === 'all') {
        // Show a mix of all result types
        let hasResults = false;
        
        // Check posts
        const matchedPosts = searchData.posts.filter(post => 
            post.content.toLowerCase().includes(query) || 
            post.author.toLowerCase().includes(query)
        );
        
        if (matchedPosts.length > 0) {
            hasResults = true;
            const postsSection = document.createElement('div');
            postsSection.innerHTML = `
                <h4 style="margin: 20px 0 10px; color: #686CE9;">Posts</h4>
            `;
            container.appendChild(postsSection);
            
            matchedPosts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post-result';
                postElement.innerHTML = `
                    <div class="post-content">${post.content}</div>
                    <div class="post-meta">
                        Posted by ${post.author} • ${post.time} • ${post.likes} likes • ${post.comments} comments
                    </div>
                `;
                container.appendChild(postElement);
            });
        }
        
        // Check jobs
        const matchedJobs = searchData.jobs.filter(job => 
            job.title.toLowerCase().includes(query) || 
            job.company.toLowerCase().includes(query)
        );
        
        if (matchedJobs.length > 0) {
            hasResults = true;
            const jobsSection = document.createElement('div');
            jobsSection.innerHTML = `
                <h4 style="margin: 20px 0 10px; color: #686CE9;">Jobs</h4>
            `;
            container.appendChild(jobsSection);
            
            matchedJobs.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.className = 'job-result';
                jobElement.innerHTML = `
                    <h4>${job.title}</h4>
                    <p>${job.company} • ${job.location}</p>
                    <p>${job.type} • Posted ${job.posted}</p>
                `;
                container.appendChild(jobElement);
            });
        }
        
        // Check accounts
        const matchedAccounts = searchData.accounts.filter(account => 
            account.name.toLowerCase().includes(query) || 
            account.title.toLowerCase().includes(query)
        );
        
        if (matchedAccounts.length > 0) {
            hasResults = true;
            const accountsSection = document.createElement('div');
            accountsSection.innerHTML = `
                <h4 style="margin: 20px 0 10px; color: #686CE9;">People</h4>
            `;
            container.appendChild(accountsSection);
            
            matchedAccounts.forEach(account => {
                const accountElement = document.createElement('div');
                accountElement.className = 'result-item';
                accountElement.innerHTML = `
                    <img src="${account.img}" class="result-img">
                    <div class="result-info">
                        <h4>${account.name}</h4>
                        <p>${account.title}</p>
                        <p>${account.connections} connections</p>
                    </div>
                `;
                container.appendChild(accountElement);
            });
        }
        
        // Check companies
        const matchedCompanies = searchData.companies.filter(company => 
            company.name.toLowerCase().includes(query) || 
            company.industry.toLowerCase().includes(query)
        );
        
        if (matchedCompanies.length > 0) {
            hasResults = true;
            const companiesSection = document.createElement('div');
            companiesSection.innerHTML = `
                <h4 style="margin: 20px 0 10px; color: #686CE9;">Companies</h4>
            `;
            container.appendChild(companiesSection);
            
            matchedCompanies.forEach(company => {
                const companyElement = document.createElement('div');
                companyElement.className = 'company-result';
                companyElement.innerHTML = `
                    <img src="${company.logo}" class="company-logo" onerror="this.src='https://via.placeholder.com/60'">
                    <div class="result-info">
                        <h4>${company.name}</h4>
                        <p>${company.industry}</p>
                        <p>${company.employees} employees</p>
                    </div>
                `;
                container.appendChild(companyElement);
            });
        }
        
        // Check groups
        const matchedGroups = searchData.groups.filter(group => 
            group.name.toLowerCase().includes(query) || 
            group.category.toLowerCase().includes(query)
        );
        
        if (matchedGroups.length > 0) {
            hasResults = true;
            const groupsSection = document.createElement('div');
            groupsSection.innerHTML = `
                <h4 style="margin: 20px 0 10px; color: #686CE9;">Groups</h4>
            `;
            container.appendChild(groupsSection);
            
            matchedGroups.forEach(group => {
                const groupElement = document.createElement('div');
                groupElement.className = 'group-result';
                groupElement.innerHTML = `
                    <div class="group-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="result-info">
                        <h4>${group.name}</h4>
                        <p>${group.members} members • ${group.category}</p>
                    </div>
                `;
                container.appendChild(groupElement);
            });
        }
        
        // Check services
        const matchedServices = searchData.services.filter(service => 
            service.name.toLowerCase().includes(query) || 
            service.provider.toLowerCase().includes(query)
        );
        
        if (matchedServices.length > 0) {
            hasResults = true;
            const servicesSection = document.createElement('div');
            servicesSection.innerHTML = `
                <h4 style="margin: 20px 0 10px; color: #686CE9;">Services</h4>
            `;
            container.appendChild(servicesSection);
            
            matchedServices.forEach(service => {
                const serviceElement = document.createElement('div');
                serviceElement.className = 'service-result';
                serviceElement.innerHTML = `
                    <h4>${service.name}</h4>
                    <p>${service.provider} • Rating: ${service.rating}</p>
                `;
                container.appendChild(serviceElement);
            });
        }
        
        if (!hasResults) {
            container.innerHTML = `
                <div class="no-results">
                    <p>No results found for "${query}"</p>
                </div>
            `;
        }
    } else {
        // Show results for specific filter
        const matchedItems = searchData[filter].filter(item => {
            if (filter === 'posts') {
                return item.content.toLowerCase().includes(query) || 
                       item.author.toLowerCase().includes(query);
            } else if (filter === 'jobs') {
                return item.title.toLowerCase().includes(query) || 
                       item.company.toLowerCase().includes(query);
            } else if (filter === 'accounts') {
                return item.name.toLowerCase().includes(query) || 
                       item.title.toLowerCase().includes(query);
            } else if (filter === 'companies') {
                return item.name.toLowerCase().includes(query) || 
                       item.industry.toLowerCase().includes(query);
            } else if (filter === 'groups') {
                return item.name.toLowerCase().includes(query) || 
                       item.category.toLowerCase().includes(query);
            } else if (filter === 'services') {
                return item.name.toLowerCase().includes(query) || 
                       item.provider.toLowerCase().includes(query);
            }
            return false;
        });
        
        if (matchedItems.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <p>No ${filter} results found for "${query}"</p>
                </div>
            `;
            return;
        }
        
        matchedItems.forEach(item => {
            let itemElement = document.createElement('div');
            
            if (filter === 'posts') {
                itemElement.className = 'post-result';
                itemElement.innerHTML = `
                    <div class="post-content">${item.content}</div>
                    <div class="post-meta">
                        Posted by ${item.author} • ${item.time} • ${item.likes} likes • ${item.comments} comments
                    </div>
                `;
            } else if (filter === 'jobs') {
                itemElement.className = 'job-result';
                itemElement.innerHTML = `
                    <h4>${item.title}</h4>
                    <p>${item.company} • ${item.location}</p>
                    <p>${item.type} • Posted ${item.posted}</p>
                `;
            } else if (filter === 'accounts') {
                itemElement.className = 'result-item';
                itemElement.innerHTML = `
                    <img src="${item.img}" class="result-img">
                    <div class="result-info">
                        <h4>${item.name}</h4>
                        <p>${item.title}</p>
                        <p>${item.connections} connections</p>
                    </div>
                `;
            } else if (filter === 'companies') {
                itemElement.className = 'company-result';
                itemElement.innerHTML = `
                    <img src="${item.logo}" class="company-logo" onerror="this.src='https://via.placeholder.com/60'">
                    <div class="result-info">
                        <h4>${item.name}</h4>
                        <p>${item.industry}</p>
                        <p>${item.employees} employees</p>
                    </div>
                `;
            } else if (filter === 'groups') {
                itemElement.className = 'group-result';
                itemElement.innerHTML = `
                    <div class="group-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="result-info">
                        <h4>${item.name}</h4>
                        <p>${item.members} members • ${item.category}</p>
                    </div>
                `;
            } else if (filter === 'services') {
                itemElement.className = 'service-result';
                itemElement.innerHTML = `
                    <h4>${item.name}</h4>
                    <p>${item.provider} • Rating: ${item.rating}</p>
                `;
            }
            
            container.appendChild(itemElement);
        });
    }
}

// Function to handle filter clicks
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
            
            // Hide all result containers
            document.querySelectorAll('.search-results > div[id$="Results"]').forEach(div => {
                div.style.display = 'none';
            });
            
            // Show the selected one
            if (filter === 'all') {
                document.getElementById('allResults').style.display = 'block';
            } else {
                document.getElementById(`${filter}Results`).style.display = 'block';
            }
            
            // Load results if not already loaded
            if (filter !== 'all' && document.getElementById(`${filter}Results`).innerHTML === '') {
                loadResults(filter, searchQuery);
            }
        });
    });
}

// Initialize the page
window.onload = function() {
    setupFilterButtons();
    
    // Get search query from URL or input field
    const urlParams = new URLSearchParams(window.location.search);
    let searchQuery = urlParams.get('q') || '';
    
    document.getElementById('searchInput').value = searchQuery;
    
    if (searchQuery) {
        loadSearchResults(searchQuery);
    } else {
        document.getElementById('allResults').innerHTML = `
            <div class="no-results">
                <p>Enter a search term to see results</p>
            </div>
        `;
    }
    
    // Handle search input changes
    document.getElementById('searchInput').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                loadSearchResults(query);
            }
        }
    });
};