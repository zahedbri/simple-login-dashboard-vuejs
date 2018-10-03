<template>
    <div class="dashboard">
        <div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper teal">
                    <a v-if="this.$route.name=='Dashboard'" class="brand-logo"><i class="material-icons">dashboard</i>Dashboard</a>
                    <a v-else class="brand-logo"><i class="material-icons">person</i>Profile</a>                
                    <a class="logout-btn right hide-on-med-and-down" v-on:click="logout()"><i class="material-icons">settings_power</i></a>
                </div>
            </nav>
        </div>

        <div class="center-align">
            <CircularLoader v-if="loading"/>
            <ListItems v-else :users="users"/>
        </div>
    </div>
</template>

<script>
import userApi from '@/services/api/user'
import ListItems from '@/components/ListItems'
import CircularLoader from '@/components/CircularLoader'


export default {
    name: 'Dashboard',
    props: ['testprop'],
    components: {
        ListItems,
        CircularLoader
    },
    methods: {
        logout(){
            localStorage.clear()
            this.$router.push({ name: 'Login' })
        }
    },
    data (){
        return {
            loading: true,
            users: []
        };
    },
    created (){
        // this will return a promise
        userApi.getDelayedUsers()
            .then(users => {
                this.users = users
            })
            .catch(error => console.log('ERRORX: '+ error))
            .finally(() => {
                // error or not, stop loading
                console.log(this.users.data)
                this.loading = false
            })
    },   
}
</script>

<style>
.brand-logo{
    font: 'Open-sans';
    margin-left: 20px;  
}

.loader{
    margin-top: 100px;
}

.logout-btn{
    margin-right: 20px;
}
</style>
