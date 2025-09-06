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

const signup = new Vue({
    el: '#signup',
    data: {
        loading: false,
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    },
    methods: {
  onSubmit() {
  this.loading = true

  const regex = /^[A-Za-z0-9 ]+$/
  const nameInput = document.getElementById('name')
  const passwordInput = document.getElementById('password')

  if (
    this.name.trim() === '' || 
    this.email.trim() === '' || 
    this.password.trim() === ''
  ) {
    this.loading = false
    return
  }

  // regex validation
  if (!regex.test(this.name)) {
    nameInput.classList.remove("valid")
    nameInput.classList.add("invalid")
    alert("Name can only contain letters, numbers, and spaces.")
    this.loading = false
    return
  } else {
    nameInput.classList.remove("invalid")
    nameInput.classList.add("valid")
  }

    if (this.password !== this.repeatPassword) {
    this.loading = false
    passwordInput.classList.remove("valid")
    passwordInput.classList.add("invalid")
    alert("Passwords do not match.")
    return
    }

  const user = {
    name: this.name,
    email: this.email,
    password: this.password
  }
  console.log(user)

  setTimeout(() => {
    this.loading = false
  }, 2000)
}

}
})