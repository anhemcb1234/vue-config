<template>
<div class="main-body">
    <NavBar></NavBar>
    <div class="grid grid-cols-3 gap-4 m-3">
        <div class="col w-full mb-3">
            <div class="card">
                <img src="https://via.placeholder.com/340x120/FFB6C1/000000" alt="Cover" class="card-img-top w-full">
                <div class="card-body text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style="width:100px;margin-top:-65px" alt="User" class="img-fluid rounded-full img-thumbnail rounded-circle border-0 ">
                    <h5 class="card-title">John Doe</h5>
                    <p class="text-secondary mb-1">Full Stack Developer</p>
                    <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                </div>
                <div class="card-footer flex justify-between mt-1">
                    <router-link :to="{name:'user',query:{id:1}}">
                        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button"><i class="material-icons">add</i>Follow</button>
                    </router-link>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg></button>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'HomePageAdmin',
    components: {
        NavBar,
        Footer
    },
}
</script>

<style>

</style>
