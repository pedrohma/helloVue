var dice = new Vue({
    el: '#diceValue',
    data: {
        value: ''
    },
    methods:{
        roll: function(){
            var num = Math.floor(Math.random() * 6) + 1;
            dice.value = num;
        }
    }
})