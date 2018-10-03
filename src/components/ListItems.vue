<template>
    <div>
        <div v-if="this.$route.name=='Dashboard'" class="card">
            <div class="collection with-header">
                <h4 class="collection-header">List of all users</h4>
                <router-link v-for="item in allNames" :key="item.id" :to="{ name: 'Profile', params: { user: item } }" class="collection-item" >{{item.name}}</router-link>
            </div>
        </div>
        <router-view v-else class="center"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'ListItems',
        props: ["users"],
        data (){
            return {
                allNames: [],
            }
        },
        created (){
            this.allNames = this.users.data.map((item) => {
                return {
                    name: item.first_name + ' ' + item.last_name,
                    avatar: item.avatar,
                };
            });
        },
    }
</script>

<style>
.card{
    max-width: 500px;
    margin: 0 auto;
}
</style>
