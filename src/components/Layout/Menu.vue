<template>
    <div class="menu">
        <q-tabs v-model="tab" align="justify" dense no-caps narrow-indicator>
            <q-tab :ripple="false" content-class="tab-content" class="text-primary" name="Home" label="Home" icon="mdi-home"></q-tab>
            <q-tab :ripple="false" content-class="tab-content" class="text-primary" name="Projects" label="Challenges" icon="mdi-magnify"></q-tab>
            <q-tab :ripple="false" content-class="tab-content" class="text-primary" name="Tasks" label="Tasks" icon="mdi-clipboard-list">
                <q-badge color="red" floating>5+</q-badge>
            </q-tab>
            <q-tab :ripple="false" content-class="tab-content" class="text-primary" name="More" label="More" icon="mdi-dots-horizontal"></q-tab>
        </q-tabs>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                tab:'Home'
            }
        }
    }
</script>

<style lang="scss" scoped>
.menu{
  position: fixed;
  width: 100%;
  left:0;
  bottom:0;
  box-shadow: 0 0 25px rgba(47,16,56,0.25);
  background-color:$white;
}

</style>
<style lang="scss">
.tab-content .q-tab__label{
    font-size:0.7rem!important;
    line-height: 1;
}
.tab-content i {
    font-size:1.4rem!important;
}
</style>