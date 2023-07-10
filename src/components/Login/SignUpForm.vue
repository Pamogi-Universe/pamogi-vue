<template>
    <div class="signup-form">
        <TheInput label="First name" />
        <TheInput  label="Last name" class="mt-5" />
        <TheInput  label="Email" type="email" class="mt-5" />
        <TheInput  label="Password" type="password" class="mt-5" />
        <TheCheckbox v-model="acceptTerms" label="I accept the terms and conditions" class="mt-5" />
        <q-btn color="primary" text-color="white" label="Sign up" class="full-width mt-5" />
        <div class="no-account-container">
            <span class="span-no-account">Already have an account?</span>
            <button class="btn-sign-up" text-color="primary" @click="$emit('toggleForm', 'login')">Log in</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                acceptTerms:false
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