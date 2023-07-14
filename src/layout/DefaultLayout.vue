<template>
    <div>
        <router-view />
        <Menu v-if="isAuthenticated"></Menu>
    </div>
</template>

<script>
import Menu from "@/components/Layout/Menu.vue"
 import {mapGetters} from "pinia"
import {useAppStore} from "@/stores/app.js"
    export default {
        components:{
            Menu
        },
        computed:{
            ...mapGetters(useAppStore,['isAuthenticated']),
    
        }
    }
</script>

<style lang="scss" scoped>

</style>