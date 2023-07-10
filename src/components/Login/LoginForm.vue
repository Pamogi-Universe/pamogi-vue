<template>
    <div class="login-form">
        <q-form @submit="login" ref="loginForm" greedy>
        <TheInput lazy-rules="ondemand" :readonly="loading" v-model="email" label="Email" inputmode="email" :rules="[value => !!value || 'Email is required.']" autocapitalize="off" />
        <TheInput lazy-rules="ondemand" :readonly="loading" v-model="password" label="Password" type="password" class="mt-5" :rules="[value => !!value|| 'Password is required.']" />
        <ThePrimaryButton :loading="loading" label="Log in" class="full-width mt-5" type="submit" />
        <div class="no-account-container">
            <span class="span-no-account">No account yet?</span>
            <button class="btn-sign-up" text-color="primary" @click="$emit('toggleForm', 'signup')">Sign up</button>
        </div>
        </q-form>
    </div>
</template>

<script>
import {login} from "@/services/pocketbase/authentication.js"
import { Notify } from 'quasar'
    export default {
        data(){
            return{
                email:'',
                password:'',
                loading:false
            }
        },
        methods:{
            async login(){
                if(this.loading) return;
                this.loading = true;
                try {
                    await login({email:this.email,password: this.password});
                    console.log(this.$router);
                    this.$router.push('/')
                    
                    
                } catch (error) {
                    let errorMessage = "Something went wrong.";
                    if(error.message == "Failed to authenticate.") errorMessage = "Incorrect email or password.";
                    Notify.create({
                        type: 'negative',
                        message: errorMessage,
                        position:"top"
                    })
                }finally{
                    this.loading = false;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.login-form{
        .no-account-container{
            display:flex;
            justify-content: center;
            margin-top:1.5rem;
            .span-no-account{
                color:#939393;
            }
            .btn-sign-up{
                all:unset;
                color:$primary;
                margin-left:0.5rem;
                cursor: pointer;
                &:hover{
                    text-decoration: underline;
                }
            }

        }
}
</style>