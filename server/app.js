const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/auth');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true });

const Post = require('./models/Post');

app.get('/posts', async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
});

app.post('/posts', async (req, res) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
});

app.post('/posts', authMiddleware, async (req, res) => {
    const newPost = new Post({ ...req.body, author: req.user.userId });
    await newPost.save();
    res.status(201).json(newPost);
});

app.post('/posts/:id/comments', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        post.comments.push({
            text: req.body.text,
            author: req.body.author
        });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(400).send('Failed to add comment');
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));