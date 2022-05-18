<template>
<div>
    <Nav> </Nav>

    <div class="flex items-center justify-center">
        <v-date-picker :attributes='attributes' class="w-full mx-16 mt-10" color="red" mode="date" tint-color='#f142f4' v-model="date" is-double-paned is-inline>
        </v-date-picker>
    </div>
    <p>{{date}}</p>
    <div class="grid grid-cols-3 mx-3 mt-8">

        <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight font-bold mb-2" >Chấm công</h5>
                <p class="text-gray-700 text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, debitis!
                </p>
                <button @click="handTimekeeping" type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
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
                <router-link to="/checkout">
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
                </router-link>
            </div>
        </div>
       <button @click="test">mfkr</button>
    </div>

</div>
</template>

<script>
import Nav from '../components/Nav.vue'
import {authServices} from '@/service/authServices'
export default {
    components: {
        Nav,
    },
    data() {
        const todos = [{
                description: 'Take Noah to basketball practice.',
                isComplete: false,
                dates: {
                    days: [1, 2, 3, 4],
                    month: [4]
                }, // Every Friday
                color: 'red',
            },
            {
                description: 'Take Noah to basketball practice.',
                isComplete: true,
                dates: {
                    days: [5, 6, 7, 8]
                }, // Every Friday
                color: 'green',
            },
        ];

        return {
            date: new Date(),
            incId: todos.length,
            todos,
            user:JSON.parse(localStorage.getItem('data'))

        };
    },
    methods: {
        test() {
            console.log(this.user.token)
        },
       async handTimekeeping() {
            try {
              await authServices.timekeeping(1)
            } catch (error) {
                console.log(error)
            }
        }
    },
    computed: {
        attributes() {
            return [
                // Attributes for todos
                ...this.todos.map(todo => ({
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

}
</script>

<style>

</style>
