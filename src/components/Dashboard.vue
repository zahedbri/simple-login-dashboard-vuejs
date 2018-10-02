<template>
    <div class="dashboard">
        <nav>
            <div class="nav-wrapper teal">
                <a class="brand-logo"><i class="material-icons">dashboard</i>Dashboard</a>
                <a class="right hide-on-med-and-down" v-on:click="logout()"><i class="material-icons">settings_power</i>Logout</a>
            </div>
        </nav>

        <div class="center-align">
            <div v-if="loading" class="loader">
                <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div>
                        <div class="gap-patch">
                            <div class="circle"></div>
                        </div>
                        <div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="container">
                <div class="card teal">
                    <p class="teal">text</p>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import userApi from '@/services/api/user'


export default {
    name: 'Dashboard',
    props: ['testprop'],
    data (){
        return {
            loading: true,
            users: []
        };
    },
    created(){
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
    methods: {
        logout(){
            localStorage.clear()
            this.$router.push({ name: 'Login' })
        }
    }
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
</style>
