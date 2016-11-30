new Vue({
  el: '#exercise',
  data: {
    array: ['Robbie', 'Mandy', 'Max', 'Aspen'],
    myObject: {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkiens',
      books: '3'
    },
    testData: {
      name: 'TESTOBJECT', 
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21]
    },
    toggle: true
  },
  methods: {
    toggleText: function() {
      this.toggle = !this.toggle
    }
  }
});
