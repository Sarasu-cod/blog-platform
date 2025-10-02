const form = document.getElementById('postForm');
const postsDiv = document.getElementById('posts');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const post = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
        author: document.getElementById('author').value,
    };
    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` 
        },
        body: JSON.stringify(post),
    });
    form.reset();
    loadPosts();
});

async function loadPosts() {
    const res = await fetch('http://localhost:3000/posts');
    const posts = await res.json();
    postsDiv.innerHTML = '';
    posts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'post';
        div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><small>By ${post.author}</small>`;
        postsDiv.appendChild(div);
    });
   posts.forEach(post => {
  const div = document.createElement('div');
  div.className = 'post';
  div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
    <small>By ${post.author}</small>
    <div class="comments">
      <h4>Comments:</h4>
      ${post.comments.map(c => `<p><strong>${c.author}:</strong> ${c.text}</p>`).join('')}
      <form onsubmit="addComment(event, '${post._id}')">
        <input type="text" placeholder="Your name" id="author-${post._id}" required />
        <input type="text" placeholder="Comment" id="text-${post._id}" required />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  `;
  postsDiv.appendChild(div);
});

}

async function login(username, password) {
    const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    localStorage.setItem('token', data.token);
}

async function addComment(e, postId) {
  e.preventDefault();
  const author = document.getElementById(`author-${postId}`).value;
  const text = document.getElementById(`text-${postId}`).value;

  await fetch(`http://localhost:3000/posts/${postId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ author, text })
  });

  loadPosts();
}

loadPosts();