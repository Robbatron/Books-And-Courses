new Vue({
    el: '#app',
    data: {
        ingredients: ['meat', 'fruit', 'cookies'],
        persons: [
            {name: 'Robbie', age: 27, color: 'red'},
            {name: 'Mandy', age: 'unknown', color: 'blue'}
        ],
        inputText: ''
    },
    methods: {
        pushCustom: function () {
            this.ingredients.push(this.inputText)
            this.inputText = ''
        }
    }
});