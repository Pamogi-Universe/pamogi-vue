<template>
    <div class="dashboard">
        <h2>Welcome back, Toon</h2>
        <p class="sub-header">Take a look at your projects.</p>
        <div class="card" v-for="n in [1,2,3,4,5,6,7,8,9]">
            <h5>Project {{ n }}</h5>
            <p>Description about the project to quickly remind the user what this was about</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.dashboard{
    padding: 1.5rem;
    .sub-header{
        margin-top:1rem;
        font-size: 1.1rem;
    }
    .card{
        box-shadow: 0 0 25px rgba(47,16,56,0.25);
        border-radius: 0.8rem;
        padding:1rem;
        margin-bottom:1.5rem;
    }
}
</style>