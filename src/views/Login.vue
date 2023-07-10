<template>
    <div class="login">
       <div class="left">
        <img class="logo" src="@/assets/img/logo-white.png" alt="logo" />
        <p class="slogan">Where future and collaboration go hand in hand</p>
        <img class= "collab-img" src="@/assets/svg/collab.svg" alt="collaboration illustration" />
       </div>
       <div class="right">
        <img class="mobile-logo" src="@/assets/img/logo-purple.png" alt="logo"/>
        <h1>Ready to collab?</h1>
        <div class="form-wrapper">
            <div class="form-card mb-5">
                <transition name="translate" mode="out-in">
                    <component :is="activeForm" @toggleForm="toggleForm"></component>
                </transition>
            </div>
        </div>
       </div>
    </div>
</template>

<script>
import LoginForm from "@/components/Login/LoginForm.vue"
import SignUpForm from "@/components/Login/SignUpForm.vue"
export default {
    components:{
        LoginForm,
        SignUpForm
    },
    data(){
        return{
            isLogin:true
        }
    },
    methods:{
        toggleForm(form){
            if(form === 'login') return this.isLogin = true;
            this.isLogin = false;
        }
    },
    computed:{
        activeForm(){
            return  this.isLogin ? 'LoginForm' : 'SignUpForm' 
        }
    }
}
</script>

<style lang="scss" scoped>
.login{
    height:100vh;
    display:flex;
    width: 100%;;
    .left{
        @include screen-md{
            width: 100%;
            background-color:$primary;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        }
        display: none;
        .logo{
            width:24%;
            object-fit: contain;
            max-width: 400px;
        }
        .slogan{
            color:$white;
            font-size: 1.3rem;
            margin-top:2rem;
            text-align: center;
        }
        .collab-img{
            margin-top:5rem;
            object-fit: contain;
            width: 35%;
            max-width: 600px;
        }
    }
    .right{
        @include screen-md{
            min-width: 650px;
            width:40%;
            justify-content: center;

        }
        width:100%;
        background-color:$white;
        display: flex;
        flex-direction: column;

        align-items:center;
        height:100%;
        .mobile-logo{
            @include screen-md{
                display: none;
            }
            @include screen-sm{

            height: 90px;
            }
            height:50px;
            
            object-fit: contain;
            max-height: 90px;
            margin-bottom:2rem;
            margin-top:4rem;
        }
        .form-wrapper{
            display: flex;
            flex-direction: column;
            align-items:center;
            width:80%;
            max-width: 400px;
            @include screen-sm{
                width:70%;
                max-width:525px;
            }
        }
        h1{
            @include screen-xs{
                font-size: 2rem;
            }
            @include screen-sm{
                font-size:2.5rem;
            }
            font-size: 1.5rem;
            font-weight: 600;
            margin-top:0;
            margin-bottom: 2rem;
        }
        .form-card{
            @include screen-sm{
                padding: 4rem 4rem 3rem 4rem;
            }
            padding: 2rem 2rem 1.5rem 2rem;
            width:100%;
            box-shadow: 0 0 25px rgba(47,16,56,0.25);
            border-radius: 10px;
        }

    }
}
  .translate-enter-active,
  .translate-leave-active {
    transition: all 0.5s ease;
  }
  
  .translate-enter-from,
  .translate-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>