function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];

var a = cars.find(function (car) {
    return car.model === 'Focus';
});

console.log(a);

var posts = [
    {
        id: 1,
        title: 'New Post'
    },
    {
        id: 2,
        title: 'Old Post'
    }
];

var comment = {
    postId: 1,
    content: 'Great Post'
};

function postForComment(posts, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts, comment));