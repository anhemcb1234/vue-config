<template>
<div class="container ">

    <div class="md:mx-14  mx-4">
        <nav class="container flex rounded justify-around bg-blue-600  p-3">
        <div class="flex items-center md:w-44 md:h-10 w-24 h-8 overflow-hidden">
          <img class="w-full h-full object-cover" src="https://phanmemtinhluong.com/wp-content/uploads/2020/12/vietinsoft_logo512.png" alt="">
        </div>
        <!-- left header section -->
        <div class="items-center hidden space-x-8 lg:flex">
            <router-link to="/home">
                 <a href="" class="text-white text-md font-bold">Home</a>
            </router-link>
            <router-link 
            to="/payroll">
            <a href="" class="text-white text-md font-bold">Payroll</a> </router-link>
            <a href="" class="text-white text-md font-bold">Lorem</a>
            <a href="" class="text-white text-md font-bold">lorem</a>
            <a href="" class="text-white text-md font-bold"> lorem</a>
        </div>
        <!-- right header section -->
       
        <div class="flex items-center space-x-2">

              <li v-if="this.user.username" class="flex items-center">
                    <span class="mr-6 font-bold text-2xl text-white">{{ this.user.username }}</span>
                   <button @click="logout" class="px-4 py-2 font-bold text-md text-blue-100 bg-red-600 rounded-md">
                Logout
            </button> 
            </li>
            <div v-if="!this.user">
                <button class="px-4 py-2 text-blue-100 hover:bg-slate-500 bg-blue-800 rounded-md">
                Sign in
            </button>
            </div>
           
        </div>
    </nav>
    </div>

</div>

</template>

<script>
import {
    authServices
} from '@/service/authServices'
export default {
    name: 'Nav',
    data() {
        return {
            user: JSON.parse(localStorage.getItem('data'))
        }
    },
    methods: {
        async logout() {
            try {
                await authServices.logout(this.user.staffId)
                localStorage.removeItem('data')
                localStorage.removeItem('token')
                // this.$router.push('/')
            } catch (error) {
                console.log(error)
            }
        },
    },

}
</script>

<style>

</style>
