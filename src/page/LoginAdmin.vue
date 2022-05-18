<template>
<div class="py-6 h-screen flex items-center justify-center">
    <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div class="hidden lg:block lg:w-1/2 bg-cover" style="background-image:url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"></div>
        <div class="w-80 p-8 lg:w-1/2">
            <h2 class="text-2xl font-semibold text-gray-700 text-center">Hackathon</h2>
            <p class="text-xl text-gray-600 text-center">Welcome back Admin!</p>

            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">User Name</label>
                <input v-model="name" placeholder=" Enter user name" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text">
                <span class="text-red-500 italic text-sm">{{errorName}}</span>
            </div>
            <div class="mt-4">
                <div class="flex justify-between">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                </div>
                <input v-model="password" placeholder="Enter your password" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password">
                <span class="text-red-500 italic text-sm">{{errorPassword}}</span>
            </div>
            <div class="mt-8">
                <button @click="handlerSubmit()" class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
            </div>

        </div>
    </div>
</div>
</template>

<script>
// import {
//     authServices
// } from '@/service/authServices';
export default {
    data() {
        return {
            name: '',
            password: '',
            errorName: '',
            errorPassword: ''
        }
    },
    methods: {
        handlerSubmit() {
            this.$router.push('/home')
        },
        async login() {
            if (this.name == '') {
                this.errorName = 'Please enter your name'
                return;
            }
            if (this.password == '') {
                this.errorPassword = 'Please enter your password'
                return;
            }
            // try {
            //     // const response = authServices.login({
            //     //     name: this.name,
            //     //     password: this.password
            //     // })
            //     const data = response.data;
            // } catch (error) {
            //     console.log(error.message);
            // }
        }
    }
}
</script>

<style>

</style>
