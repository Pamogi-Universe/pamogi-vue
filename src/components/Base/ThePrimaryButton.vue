<template>
    <q-btn v-bind="$attrs" color="primary" :dense="isMobile" text-color="white" />
</template>

<script>
import {mapGetters} from "pinia"
import {useAppStore} from "@/stores/app.js"
export default {
        computed:{
            ...mapGetters(useAppStore,['isMobile']),
            
        }
}
</script>

<style lang="scss" scoped>

</style>