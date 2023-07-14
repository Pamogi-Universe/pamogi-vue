import {defineStore} from "pinia"
import {isAuthenticated} from "@/services/pocketbase/authentication";

export const useAppStore = defineStore('app',{
    state: () => ({
        width: window.innerWidth,
        authenticated:isAuthenticated()
    }),
    getters:{
        isMobile : state => state.width <= 768,
        isAuthenticated: state => state.authenticated
    },
    actions:{
        setWidth(){
            this.width = window.innerWidth
        },
        setAuthenticated(value){
            this.authenticated = value
        }
    }
})