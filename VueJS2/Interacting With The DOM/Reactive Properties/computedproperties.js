new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    computed: { // dependent properties
        output: function() {
            return this.secondCounter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
    watch: { // execute code upon data changes
        counter: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000)
        }
    },
    methods: { // methods of this Vue instance
        result: function() {
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    }
});