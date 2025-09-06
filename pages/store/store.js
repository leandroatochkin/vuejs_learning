Vue.component('spinner',{
    props: ['isLoading'],
    template: `<div class="spinner center" v-if="isLoading">
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    </div>`
})

Vue.component('product',{
    props: ['product'],
    template: `
    <div class="product">
        <img :src="product.image" alt="product image" class="product-image"/>
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-price">\${{ product.price }}</p>
        <button class="product-button">Add to Cart</button>
    </div>
    `
})

const store = new Vue({
    el: '#store',
    data: {
        loading: false,
        products: [],
    },
    methods: {
        fetchData(){
            this.loading = true
            fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())            
            .then(json=>this.products = [...json])
            .catch(e => console.log(e))
            .finally(() => this.loading = false)
        },
    },
    created(){
        this.fetchData()
    }
})