<template>
<div>
    <Nav> </Nav>
    <div class="flex items-center justify-center">
        <v-date-picker :attributes='attributes' class="w-3/4 mt-10" color="red" is-dark is-range mode='single' tint-color='#f142f4' v-model='selectedDate' :theme-styles='themeStyles' is-double-paned is-inline>
        </v-date-picker>
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
                dates: new Date(),
            }],
            selectedDate: null,
            themeStyles: {
                wrapper: {
                    border: '1',
                },
                header: {
                    color: '#fafafa',
                    backgroundColor: '#f142f4',
                    borderColor: '#404c59',
                    borderWidth: '1px 1px 0 1px',
                },
                headerVerticalDivider: {
                    borderLeft: '1px solid #404c59',
                },
                weekdays: {
                    color: '#ffffff',
                    backgroundColor: '#f142f4',
                    borderColor: '#ff0098',
                    borderWidth: '0 1px',
                    padding: '5px 0 10px 0',
                },
                weekdaysVerticalDivider: {
                    borderLeft: '1px solid #404c59',
                },
                weeks: {
                    border: '1px solid #dadada',
                },
            },
        };
    }
}
</script>

<style>

</style>
