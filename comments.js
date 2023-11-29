//Create Web Server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
//Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MyDatabase');
//Create Schema
const commentSchema = new mongoose.Schema({
    id: String,
    name: String,
    comment: String
});
//Create Model
const Comment = mongoose.model('Comment', commentSchema);
//Create Parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
//Create Router
app.use(express.static('public'));
app.get('/comment', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) throw err;
        res.render('index.ejs', { comments: comments });
    });
});
app.post('/comment', urlencodedParser, (req, res) => {
    let newComment = new Comment(req.body);
    newComment.save((err) => {
        if (err) throw err;
        res.redirect('/comment');
    });
});
app.listen(port, () => console.log(`Server is listening on port ${port}`));