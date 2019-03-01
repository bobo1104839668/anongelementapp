<template>
    <div class="classification">
        <Header/>
        <List/>
        
       
    </div>
</template>

<script>
import Vuex from "vuex";
import Header from "./components/header";
import List from "./components/list";
export default {
    components:{
    	"Header":Header,
    	"List":List
    },
    
}
</script>

<style lang="">
    
</style>