Vue.component('box',{
    props: ['isVisible'],
    template: `<div class="box" v-if="isVisible">ssss</div>`

})

Vue.component('spinner',{
    props: ['isLoading'],
    template: `<div class="box" v-if="isLoading">cargando productos...</div>`

})

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        fruits: ['Apple', 'Banana', 'Cherry'],
        newFruit: '',
        products: [],
        counter: 0,
        loading: false,
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
            this.loading = true
            fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())            
            .then(json=>this.products = [...json])
            .catch(e => console.log(e))
            .finally(() => this.loading = false)
        }
    },
    computed: {
        changeColor() {
        if (this.counter <= 10) return 'green'
        if (this.counter < 20) return 'yellow'
        return 'red'
        }
    }
})

