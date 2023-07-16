<template>
    <div class="dashboard">
        <h2>Welcome back, Toon</h2>
        <p class="sub-header">Take a look at your open tasks.</p>
        <div class="card-container" v-if="tasks.length">
            <div class="card" v-for="task in tasks">
                <q-icon class="task-type" :class="getIconColor(task.taskType)" :name="getIcon(task.taskType)"></q-icon>
                <h5 class="title">{{task.name}}</h5>
                <p class="company">{{task.company}}</p>
                <p class="description">{{task.description}}</p>
                <p class="reward">Reward: {{ task.reward }}</p>
                <ThePrimaryButton class="pl-3 pr-3" label="View details" />
            </div>
        </div>
        <div class="empty-container" v-if="!tasks.length">
            <img src="@/assets/svg/empty-purple.svg" alt="empty search illustration">
            <p>Click below to start tackling new tasks and make your mark!</p>
            <ThePrimaryButton class="full-width mt-5" label="Expore tasks" />
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tasks:[
                    {
                        name:"Buy Pogi token",
                        company: "Pamogi",
                        description: "Buy 500 Pogi.",
                        taskType: "task",
                        reward: "20 Pogi"
                    },
                    {
                        name:"Find 5 new clients",
                        company: "Pareteum",
                        description: "Sign up 5 new clients for our basic package.",
                        taskType: "task",
                        reward: "€ 10,00"
                    },
                    {
                        name:"Attract investors",
                        company: "Pamogi",
                        description: "We need a new strategy to attract early investors for our new project.",
                        taskType: "idea",
                        reward: "50 Pogi"
                    },
                    {
                        name:"Buy Pogi token",
                        company: "Pamogi",
                        description: "Buy 500 Pogi.",
                        taskType: "task",
                        reward: "20 Pogi"
                    },
                    {
                        name:"Find 5 new clients",
                        company: "Pareteum",
                        description: "Sign up 5 new clients for our basic package.",
                        taskType: "task",
                        reward: "€ 10,00"
                    },
                    {
                        name:"Attract investors",
                        company: "Pamogi",
                        description: "We need a new strategy to attract early investors for our new project.",
                        taskType: "idea",
                        reward: "50 Pogi"
                    },
                    {
                        name:"Buy Pogi token",
                        company: "Pamogi",
                        description: "Buy 500 Pogi.",
                        taskType: "task",
                        reward: "20 Pogi"
                    },
                    {
                        name:"Find 5 new clients",
                        company: "Pareteum",
                        description: "Sign up 5 new clients for our basic package.",
                        taskType: "task",
                        reward: "€ 10,00"
                    },
                    {
                        name:"Attract investors",
                        company: "Pamogi",
                        description: "We need a new strategy to attract early investors for our new project.",
                        taskType: "idea",
                        reward: "50 Pogi"
                    },
                ]
            }
        },
        methods:{
            getIcon(taskType){
                if(taskType === 'task') return 'mdi-clipboard-list'
                if(taskType === 'idea') return 'mdi-lightbulb'
                return ''
            },
            getIconColor(taskType){
                if(taskType === 'task') return 'primary'
                if(taskType === 'idea') return 'yellow'
                return ''
            }
        }
    }
</script>

<style lang="scss" scoped>
.dashboard{
    padding: 1.5rem;
    .sub-header{
        margin-top:1rem;
        font-size: 1.1rem;
    }
    .card-container{
        margin-top:2rem;
        padding-bottom: calc(1.5rem);
        .card{
            box-shadow: 0 0 25px rgba(47,16,56,0.25);
            border-radius: 0.8rem;
            padding:1rem;
            margin-bottom:1.5rem;
            position: relative;
            .task-type{
                position: absolute;
                right: 1rem;
                top:1.5rem;
                font-size: 1.2rem;
                &.primary{
                    color: $primary;
                }
                &.yellow{
                    color: rgb(255, 196, 0);
                }
            }
            .company{
                margin-top:0.25rem;
                color:$light-grey;
                font-style: italic;
                font-size:0.8rem;
            }
            .description{
                font-size:0.95rem;
            }
            .reward{
                color:#79c653;
            }
        }
    }
    .empty-container{
        width: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
        height:100%;
        margin-top:5rem;
        flex-direction: column;
        img{
            width:70%;
        }
        p{
            text-align: center;
            color:$light-grey;
            font-size:1rem;
            margin-top:3rem;
        }
    }
}
</style>