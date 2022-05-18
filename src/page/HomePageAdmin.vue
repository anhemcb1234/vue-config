<template>
<div class="main-body">
    <NavBar></NavBar>
    <div class="grid grid-cols-3 gap-4 m-3">
        <div class="col bg-yellow-500 drop-shadow-xl p-5 mt-20 rounded w-full mb-3">
            <div class="card">
                <div class="card-body text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style="width:100px;margin-top:-65px" alt="User" class="img-fluid rounded-full img-thumbnail rounded-circle border-0 ">
                    <h5 class="card-title">John Doe</h5>
                    <p class="text-secondary mb-1">Full Stack Developer</p>
                    <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                </div>
                <div class="card-footer flex justify-between mt-2">
                    <router-link :to="{name:'user',query:{id:1}}">
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button">Detail</button>
                    </router-link>
                    <button @click="handlerDel()" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" type="button">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
    <button @click="getData()">test</button>
    <Footer></Footer>
</div>
</template>

<script>
import {
    homeService
} from '../service/homeService'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'HomePageAdmin',
    components: {
        NavBar,
        Footer
    },
    methods: {
        async getData() {
            const data = await homeService.getUserById()
            console.log(data)
        },
        async handlerDel() {
            try {
                const data = await homeService.deleteUserById(1)
                console.log(data)
            } catch (e) {
                console.log(e)
            }
        }
    },
    mounted() {
        if(localStorage.getItem('token') === null) {
            alert("You are not logged in")
            this.$router.push('/')
            return
        }
        this.getData()
    },
}
</script>

<style>

</style>
