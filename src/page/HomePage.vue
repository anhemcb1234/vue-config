<template>
<div>
    <Nav> </Nav>
    <div class="flex items-center justify-center">
        <v-date-picker  :attributes='attributes' class="w-3/4 mt-10" color="red" is-dark mode='single' tint-color='#f142f4' v-model="date"  is-double-paned is-inline>
        </v-date-picker>
    </div>
    <button @click="handlerDate()">test</button>
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
        handlerDate() {
            console.log(this.date)
        },
    },
}
</script>

<style>

</style>
