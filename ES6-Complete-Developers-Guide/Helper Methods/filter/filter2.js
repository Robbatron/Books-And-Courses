var post = {
    id: 4,
    title: 'New Post'
};

var comments = [
    {
        postId: 4,
        content: 'awesome post'
    },
    {
        postId: 3,
        content: 'it was ok'
    },
    {
        postId: 4,
        content: 'neat'
    }
];

// Show comments for only a specific post...

function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId === post.id;
    });
}

console.log(JSON.stringify(commentsForPost(post, comments)));