<template>
    <div class="home">
       
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    created () {
        this.handleList();
    },
    methods: {
        ...Vuex.mapActions({
            handleList:"home/handleList"
        })
    }
}
</script>

<style lang="">
    
</style>