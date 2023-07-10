
<template>
  <router-view />
</template>

<script>
import {useAppStore} from "@/stores/app.js"
import {mapActions} from "pinia"
export default {
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
