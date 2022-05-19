<template>
<div>
    <button @click="test">test</button>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        test() {
            this.$toast.error("I'm a toast!", {
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

}
</script>

<style>

</style>
