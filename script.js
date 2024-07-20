document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            title: 'The Pixels',
            description: 'Amazing social multiplayer...',
            imgSrc: 'https://i.ibb.co/7tBMYYT/file-45.jpg',
            link: 'https://example.com',
            category: 'games'
        },
        {
            title: 'PlayDeck',
            description: 'PlayDeck is the ultimate...',
            imgSrc: 'https://i.ibb.co/b7CwvXC/file-46.jpg',
            link: 'https://example.com',
            category: 'tools'
        }
        // Add more posts here
    ];

    const postsContainer = document.getElementById('posts-container');
    const searchInput = document.getElementById('search');
    const banner = document.getElementById('banner');
    const timerElement = document.getElementById('timer');

    const renderPosts = (filteredPosts) => {
        postsContainer.innerHTML = '';
        filteredPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            
            postElement.innerHTML = `
                <img src="${post.imgSrc}" alt="Icon">
                <div class="post-content">
                    <h2>${post.title}</h2>
                    <p>${post.description}</p>
                </div>
                <button onclick="window.location.href='${post.link}'">Open</button>
            `;

            postsContainer.appendChild(postElement);
        });
    };

    const filterPosts = () => {
        const query = searchInput.value.toLowerCase();
        const filteredPosts = posts.filter(post => 
            post.title.toLowerCase().includes(query) || 
            post.description.toLowerCase().includes(query) ||
            post.category.toLowerCase().includes(query)
        );
        renderPosts(filteredPosts);
    };

    searchInput.addEventListener('input', filterPosts);

    // Initial render
    renderPosts(posts);

    // Banner functionality
    banner.style.display = 'flex';

    let countdown = 10;
    const countdownInterval = setInterval(() => {
        countdown--;
        timerElement.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            banner.style.display = 'none';
        }
    }, 1000);
});