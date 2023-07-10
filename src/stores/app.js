import {defineStore} from "pinia"

export const useAppStore = defineStore('app',{
    state: () => ({
        width: window.innerWidth
    }),
    getters:{
        isMobile : state => state.width <= 768
    },
    actions:{
        setWidth(){
            this.width = window.innerWidth
        }
    }
})