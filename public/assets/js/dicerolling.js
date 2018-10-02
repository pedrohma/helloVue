var dice = new Vue({
    el: '#diceValue',
    data: {
        dice1: '',
        dice2: ''
    },
    methods:{
        roll: function(){
            var num = Math.floor(Math.random() * 6) + 1;
            var num2 = Math.floor(Math.random() * 6) + 1;
            dice.dice1 = num;
            dice.dice2 = num2;
        }
    }
})