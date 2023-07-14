<template>
    <div class="signup-form">
        <q-form @submit="register" ref="registerForm" greedy>
            <TheInput lazy-rules="ondemand" :readonly="loading" v-model="firstName" label="First name" :rules="[rules.required]"/>
            <TheInput lazy-rules="ondemand" :readonly="loading" v-model="lastName" label="Last name" class="mt-5" :rules="[rules.required]" />
            <TheInput lazy-rules="ondemand" :readonly="loading" v-model="email" label="Email" inputmode="email" class="mt-5" :rules="[rules.required, rules.email]" autocapitalize="off" />
            <TheInput lazy-rules="ondemand" :readonly="loading" v-model="password" label="Password" type="password" class="mt-5" :rules="[rules.required,rules.minPasswordLength]" />
            <TheCheckbox v-model="acceptTerms" label="I accept the terms and conditions" class="mt-5" />
            <ThePrimaryButton color="primary" text-color="white" label="Sign up" class="full-width mt-5" type="submit" :loading="loading" />
            <div class="no-account-container">
                <span class="span-no-account">Already have an account?</span>
                <button class="btn-sign-up" text-color="primary" @click="$emit('toggleForm', 'login')">Log in</button>
            </div>
        </q-form>
    </div>
</template>

<script>
import {required,email,minPasswordLength} from "@/helpers/rules"
import {Notify} from "quasar";
import {register,login} from "@/services/pocketbase/authentication.js"
import {checkNested} from "@/helpers/util.js"
import {useAppStore} from "@/stores/app.js"
import {mapActions} from "pinia"
    export default {
        data(){
            return{
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                acceptTerms:false,
                rules:{
                    required,
                    email,
                    minPasswordLength
                },
                loading:false
            }
        },
        methods:{
            ...mapActions(useAppStore,['setAuthenticated']),
            async register(){
            if(this.loading) return;
                this.loading = true;

                if(!this.acceptTerms){
                    this.loading = false;
                    return Notify.create({
                        type:'negative',
                        message: 'You must accept the terms and conditions.',
                        position:"top"
                    });
                } 

                try {
                    await register({
                        firstName:this.firstName,
                        lastName:this.lastName,
                        email:this.email,
                        password: this.password,
                        passwordConfirm: this.password,
                        terms:this.acceptTerms
                    });
                    await login({
                        email:this.email,
                        password:this.password
                    })
                    this.setAuthenticated(true);
                    this.$router.push('/')
                    
                    
                } catch (error) {
                    let errorMessage = checkNested(error.response.data,'message') || "Something went wrong.";
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
.signup-form{
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