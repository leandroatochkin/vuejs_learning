Vue.component('box',{
    props: ['isVisible'],
    template: `<div class="box" v-if="isVisible">ssss</div>`

})

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        fruits: ['Apple', 'Banana', 'Cherry'],
        newFruit: '',
        products: []
    },
    methods: {
        addFruit(){
            if(this.newFruit.trim() !== ''){
                this.fruits.push(this.newFruit.trim());
            } else {
                alert(`no fruit`)
            }
            this.newFruit = ''
        },
        fetchData(){
            fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())            
            .then(json=>this.products = [...json])
        }
    }
})

