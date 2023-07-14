
<template>
  <DefaultLayout />
</template>

<script>
import {useAppStore} from "@/stores/app.js"
import {mapActions} from "pinia"
import DefaultLayout from "@/Layout/DefaultLayout.vue"
export default {
  components:{
    DefaultLayout
  },
    mounted(){
      window.addEventListener("resize",this.setWidth);
    },
    methods:{
      ...mapActions(useAppStore,['setWidth'])
    }
}
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  &:focus{
        -webkit-tap-highlight-color: transparent;
    outline: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }
}
body{
  width:100%;
  height:100%;
  min-height: 100vh;
}
#app{
 height:100%;
}

</style>
