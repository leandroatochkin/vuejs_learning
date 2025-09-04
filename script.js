const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        fruits: ['Apple', 'Banana', 'Cherry'],
        newFruit: ''
    },
    methods: {
        addFruit(){
            if(this.newFruit.trim() !== ''){
                this.fruits.push(this.newFruit.trim());
            } else {
                alert(`no fruit`)
            }
            this.newFruit = ''
        }
    }
})