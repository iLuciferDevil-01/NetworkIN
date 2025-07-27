// Sample data for the homepage
const newsCategories = ['technology', 'business', 'finance', 'science', 'health'];
const sampleJobs = [
    { title: 'Senior Marketing Manager', company: 'Tech Solutions Inc', location: 'Bangalore', type: 'Full-time' },
    { title: 'Product Designer', company: 'Creative Minds', location: 'Remote', type: 'Contract' },
    { title: 'Data Analyst', company: 'Analytics Pro', location: 'Mumbai', type: 'Full-time' }
];

const samplePeople = [
    { name: 'Alice Johnson', role: 'Marketing Director at Brand Co', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Bob Smith', role: 'Product Manager at Tech Corp', img: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { name: 'Charlie Brown', role: 'UX Designer at Creative Labs', img: 'https://randomuser.me/api/portraits/men/55.jpg' }
];

// Function to load news from Google News API
async function loadNews() {
    const newsContainer = document.getElementById('newsContainer');
    
    // In a real app, you would fetch from Google News API
    // For demo purposes, we'll use sample data
    newsCategories.forEach(category => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <h4>${category.charAt(0).toUpperCase() + category.slice(1)} News</h4>
            <p>Latest updates in ${category} industry</p>
        `;
        newsContainer.appendChild(newsItem);
    });
}

// Function to create a sample post
function createPost(user, content, image, likes, comments, reposts) {
    return `
        <div class="post">
            <div class="post-header">
                <img src="${user.img}" alt="${user.name}" class="post-user-img">
                <div class="post-user-info">
                    <h4>${user.name}</h4>
                    <p>${user.role} • 2h ago</p>
                </div>
            </div>
            <div class="post-content">
                ${content}
            </div>
            ${image ? `<img src="${image}" class="post-image">` : ''}
            <div class="post-actions">
                <div class="post-action">
                    <i class="far fa-thumbs-up"></i>
                    <span>${likes}</span>
                </div>
                <div class="post-action">
                    <i class="far fa-comment"></i>
                    <span>${comments}</span>
                </div>
                <div class="post-action">
                    <i class="fas fa-share"></i>
                    <span>${reposts}</span>
                </div>
            </div>
        </div>
    `;
}

// Function to load top posts
function loadTopPosts() {
    const container = document.getElementById('topPostsContainer');
    
    const posts = [
        {
            user: {
                name: 'Sarah Williams',
                role: 'Marketing Director at Brand Co',
                img: 'https://randomuser.me/api/portraits/women/33.jpg'
            },
            content: 'Excited to share that our new product launch was a huge success! We reached 1M users in just 2 weeks. #marketing #success',
            image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            likes: 245,
            comments: 32,
            reposts: 12
        },
        {
            user: {
                name: 'Mike Johnson',
                role: 'Senior Developer at Tech Solutions',
                img: 'https://randomuser.me/api/portraits/men/45.jpg'
            },
            content: 'Just published a new article about React performance optimization techniques. Check it out and let me know your thoughts!',
            image: null,
            likes: 189,
            comments: 24,
            reposts: 8
        },
        {
            user: {
                name: 'Emma Davis',
                role: 'HR Manager at People First',
                img: 'https://randomuser.me/api/portraits/women/65.jpg'
            },
            content: 'We\'re hiring for multiple positions! If you\'re looking for a new opportunity in tech, check out our careers page.',
            image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            likes: 132,
            comments: 18,
            reposts: 5
        }
    ];
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = createPost(post.user, post.content, post.image, post.likes, post.comments, post.reposts);
        container.appendChild(postElement);
        
        // Add separator between posts
        if (posts.indexOf(post) < posts.length - 1) {
            const separator = document.createElement('div');
            separator.style.height = '1px';
            separator.style.backgroundColor = '#eee';
            separator.style.margin = '15px 0';
            container.appendChild(separator);
        }
    });
}

// Function to load recommended jobs
function loadRecommendedJobs() {
    const container = document.getElementById('recommendedJobs');
    
    sampleJobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job-item';
        jobElement.innerHTML = `
            <h4>${job.title}</h4>
            <p>${job.company} • ${job.location}</p>
            <p>${job.type}</p>
        `;
        container.appendChild(jobElement);
    });
}

// Function to load suggested posts
function loadSuggestedPosts() {
    const container = document.getElementById('suggestedPostsContainer');
    
    const suggestedPost = {
        user: {
            name: 'Alex Turner',
            role: 'CEO at Startup Inc',
            img: 'https://randomuser.me/api/portraits/men/75.jpg'
        },
        content: 'Just secured $10M in Series A funding! Huge thanks to our amazing team and investors who made this possible. We\'re just getting started!',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        likes: 512,
        comments: 87,
        reposts: 45,
        networkInteraction: 'Sarah Williams from your network liked this'
    };
    
    const postElement = document.createElement('div');
    postElement.innerHTML = `
        <p style="font-size: 12px; color: #666; margin-bottom: 10px;">
            <i class="fas fa-user-friends" style="margin-right: 5px;"></i>
            ${suggestedPost.networkInteraction}
        </p>
        ${createPost(suggestedPost.user, suggestedPost.content, suggestedPost.image, suggestedPost.likes, suggestedPost.comments, suggestedPost.reposts)}
    `;
    container.appendChild(postElement);
}

// Function to load people you may know
function loadPeople() {
    const container = document.getElementById('peopleContainer');
    
    samplePeople.forEach(person => {
        const personElement = document.createElement('div');
        personElement.className = 'person-item';
        personElement.innerHTML = `
            <img src="${person.img}" alt="${person.name}" class="person-img">
            <h4>${person.name}</h4>
            <p>${person.role}</p>
            <button class="connect-btn">Connect</button>
        `;
        container.appendChild(personElement);
    });
}

// Function to load more posts
function loadMorePosts() {
    const container = document.getElementById('morePostsContainer');
    
    const morePost = {
        user: {
            name: 'Lisa Ray',
            role: 'Content Writer at Media House',
            img: 'https://randomuser.me/api/portraits/women/25.jpg'
        },
        content: 'Just published my latest article on content marketing trends for 2023. Would love to hear your thoughts!',
        image: null,
        likes: 87,
        comments: 12,
        reposts: 3
    };
    
    const postElement = document.createElement('div');
    postElement.innerHTML = createPost(morePost.user, morePost.content, morePost.image, morePost.likes, morePost.comments, morePost.reposts);
    container.appendChild(postElement);
}

// Function to load mixed posts
function loadMixedPosts() {
    const container = document.getElementById('mixedPostsContainer');
    
    const mixedPosts = [
        {
            user: {
                name: 'David Miller',
                role: 'Software Engineer at Tech Giant',
                img: 'https://randomuser.me/api/portraits/men/35.jpg'
            },
            content: 'Working on some exciting new features for our app. Can\'t wait to share them with you all soon!',
            image: null,
            likes: 76,
            comments: 8,
            reposts: 2
        },
        {
            user: {
                name: 'Sophia Chen',
                role: 'UX Researcher at Design Studio',
                img: 'https://randomuser.me/api/portraits/women/55.jpg'
            },
            content: 'Just finished conducting user interviews for our new project. So many interesting insights about user behavior!',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            likes: 94,
            comments: 15,
            reposts: 4
        }
    ];
    
    mixedPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = createPost(post.user, post.content, post.image, post.likes, post.comments, post.reposts);
        container.appendChild(postElement);
        
        // Add separator between posts
        if (mixedPosts.indexOf(post) < mixedPosts.length - 1) {
            const separator = document.createElement('div');
            separator.style.height = '1px';
            separator.style.backgroundColor = '#eee';
            separator.style.margin = '15px 0';
            container.appendChild(separator);
        }
    });
}

// Function to open post modal
function openPostModal() {
    document.getElementById('postModal').style.display = 'flex';
}

// Function to post content
function postContent() {
    // In a real app, you would send this to your backend
    alert('Post created successfully!');
    document.getElementById('postModal').style.display = 'none';
}

// Initialize the page
window.onload = function() {
    loadNews();
    loadTopPosts();
    loadRecommendedJobs();
    loadSuggestedPosts();
    loadPeople();
    loadMorePosts();
    loadMixedPosts();
};