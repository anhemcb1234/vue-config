<template>
<!-- component -->
<div class="md:p-12 bg-indigo-100 flex flex-row flex-wrap">
    <form class="md:w-1/2-screen m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg">

        <div class="text-2xl text-indigo-900 text-center">Add user</div>

        <div class="flex-col flex py-3">
            <label class="pb-2 text-gray-700 font-semibold">User Name</label>
            <input type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="John">
        </div>

        <div class="flex-col flex py-3">
            <label class="pb-2 text-gray-700 font-semibold">User Email</label>
            <input type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="John@mail.com">
        </div>
        <div class="flex-col flex py-3">
            <label class="pb-2 text-gray-700 font-semibold">Password</label>
            <input type="text" class="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200" placeholder="Password">
        </div>
        <div class="mt-2">
            <button class="p-3 bg-indigo-400 text-white w-full hover:bg-indigo-300">Add</button>
            <router-link to="/home">
                <button class="p-3 mt-2 bg-indigo-400 text-white w-full hover:bg-indigo-300">Home page</button>
            </router-link>
        </div>
    </form>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
