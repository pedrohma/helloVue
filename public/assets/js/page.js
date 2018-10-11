var year = new Vue({
    el: '#year',
    data: {
        year: new Date().getFullYear()
    }
})

var links = new Vue({
    el: '#links',
    data: {
        apps: [
            {name: 'Main Page', link: 'index.html'},
            {name: 'Dice Rolling', link: 'dicerolling.html'},
            {name: 'Bit Coin Price', link: 'bitCoin.html'}
        ]
    }
})