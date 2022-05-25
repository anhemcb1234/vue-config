<template>
 
<div>
     <Nav> </Nav>
    <div class="flex items-center justify-center ">
        <v-date-picker :attributes='attributes' class="w-full md:mx-16 mx-4 mt-10" color="red" mode="date" tint-color='#f142f4' v-model="date" is-double-paned is-inline>
        </v-date-picker>
    </div>
    <div class="grid md:grid-cols-3  grid-cols-1  mx-3 mt-8">

        <div class="flex justify-center  ">
            <div class="block p-6 rounded-lg shadow-2xl max-w-sm bg-white">
                <h5 class="text-gray-900 text-2xl text-center leading-tight font-bold mb-2">Chấm công</h5>
                <p class="text-gray-700 text-center text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, debitis!
                </p>

                <div class="flex justify-center">
                    <button @click="handTimekeeping" type="button" class="text-white text-bold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md md:w-44 px-5 py-2.5 text-center mr-2 mb-2">Submit</button>

                </div>
            </div>
        </div>

        <div class="flex justify-center mt-3">
            <div class="block p-6 rounded-lg shadow-2xl bg-white max-w-sm">
                <h5 class="text-gray-900 text-2xl text-center leading-tight  mb-2 font-bold">Xin làm thêm giờ</h5>
                <p class="text-gray-700 text-center text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, dolorum!
                </p>

                <router-link to="/overtime">
                    <div class="flex justify-center">
                        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md md:w-44 px-5 py-2.5 text-center mr-2 mb-2">Submit</button>

                    </div>
                </router-link>

            </div>
        </div>
        <div class="flex justify-center mt-3">
            <div class="block p-6 rounded-lg shadow-2xl bg-white max-w-sm ">
                <h5 class="text-gray-900 text-2xl text-center leading-tight  mb-2 font-bold">Xin về sớm</h5>
                <p class="text-gray-700 text-center text-base mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dolorum.
                </p>

                <div class="flex justify-center">
                    <button @click="checkout" type="button" class=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md md:w-44 px-5 py-2.5 text-center mr-2 mb-2">Submit</button>

                </div>
            </div>
        </div>

    </div>
    <button @click='test'>test</button>
    <!-- {{this.listUser}} -->
</div>
</template>

<script>
import Nav from '../components/Nav.vue';
import moment from 'moment';
import {
    authServices
} from '@/service/authServices'
export default {
 components: {
     Nav
 },
    data() {
        const todos = [{
                description: 'ngày nghỉ',
                isComplete: false,
               dates: { 
                  days: [1, 2, 3, 4, 5, 6, 7],
               },
                color: 'red',
            },
            {
                description: 'ngày đi làm',
                isComplete: true,
                dates:{
                    days: [1,2,3,4],
               },
                color: 'green',
            },
        ];

        return {
            date: new Date(),
            incId: todos.length,
            todos,
            user: JSON.parse(localStorage.getItem('data')),
            listUser: [20],
        };
    },

    methods: {
        test() {
          
        },

        async checkout() {
            try {
                const response = await authServices.checkout(this.user.staffId)
                if ((response.data === '')) {
                    this.$toast.warning(" xin về một lần thôi bạn êiii !", {
                        position: "top-right",
                        timeout: 5000,
                        closeOnClick: true,
                        pauseOnFocusLoss: true,
                        pauseOnHover: true,
                        draggable: true,
                        draggablePercent: 0.6,
                        showCloseButtonOnHover: false,
                        hideProgressBar: true,
                        closeButton: "button",
                        icon: true,
                        rtl: false
                    });
                    return;
                }
                this.$toast.success("chúc mừng bạn hôm nay không có lương !", {
                    position: "top-right",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false
                });
            } catch (error) {
                this.$toast.error(" error !!", {
                    position: "top-right",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false
                });

            }
        },

        async handTimekeeping() {
            try {
                await authServices.timekeeping(this.user.staffId)
                this.$toast.success(" timekeeping success !!", {
                    position: "top-right",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false
                });
            } catch (error) {
                this.$toast.error("error!", {
                    position: "top-right",
                    timeout: 5000,
                    closeOnClick: true,
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    draggable: true,
                    draggablePercent: 0.6,
                    showCloseButtonOnHover: false,
                    hideProgressBar: true,
                    closeButton: "button",
                    icon: true,
                    rtl: false
                });
            }
        },
    },
    computed: {
        attributes() {
            return [
                // Attributes for todos
                ...this.todos?.map(todo => ({
                    dates: todo.dates,
                    dot: {
                        color: todo.color,
                        class: todo.isComplete ? 'opacity-75' : '',
                    },
                    popover: {
                        label: todo.description,
                    },
                    customData: todo,
                })),
            ];
        },
    },

    async mounted() {
        try {
            const response = await authServices.getTimekeeping(this.user.staffId)
            this.listUser = response.data;
        } catch (error) {
            console.log(error)
        }
    },

}
</script>

<style>

</style>
