<template>
    <q-checkbox v-bind="$attrs" filled :dense="isMobile" />
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