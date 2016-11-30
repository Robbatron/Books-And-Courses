new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        sayHello: function() {
            this.title = 'Hello!';
            return 'Hello';
            // return 'title' would not work
            // return this.title; //would work though, because Vue proxy's properties in a way that by simply calling 'this' will give us access to these properties
        }
    }
});