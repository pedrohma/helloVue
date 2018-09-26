var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        items: [
            { text: 'Bread' },
            { text: 'Brocolli' },
            { text: 'Butter' }
        ]
    },
    methods:{
        addList: function() {
            this.items.push({ text: this.item });
            this.item = "";
        }
    }
})