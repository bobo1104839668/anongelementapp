<template>
    <div class="home">
        首页
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