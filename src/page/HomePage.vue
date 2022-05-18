<template>
<div>
    <Nav> </Nav>

    <div class="flex items-center justify-center">
            <v-date-picker :attributes='attributes' class="w-full mx-16 mt-10" color="red" mode="date"   tint-color='#f142f4' v-model="date" is-double-paned is-inline>
           </v-date-picker>

    </div>
     <!-- <p>{{date}}</p> -->
    <div class="grid grid-cols-3 mx-3 mt-8">

        <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight font-bold mb-2">Chấm công</h5>
                <p class="text-gray-700 text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, debitis!
                </p>
                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
            </div>
        </div>

        <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight  mb-2 font-bold">Xin làm thêm giờ</h5>
                <p class="text-gray-700 text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, dolorum!
                </p>
               
            <router-link to="/overtime">
                              <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
            </router-link>
           
            </div>
        </div>

        <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight  mb-2 font-bold">Xin về sớm</h5>
                <p class="text-gray-700 text-base mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dolorum.
                </p>
                 <router-link  to="/checkout">
                  <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                   
                   </router-link>           
            </div>
        </div>

    </div>

</div>
</template>

<script>
import Nav from '../components/Nav.vue'
export default {
    components: {
        Nav,
    },
    data() {
        return {
            attributes: [{
                key: 'today',
                highlight: true,
            }],
            date: new Date(),
        };
    },
    methods: {
    
    },
    
}
</script>

<style>

</style>
