<template>
    <div class="row s12">
        <div v-if="this.$route.name=='Dashboard'" class="collection with-header col s12">
            <h4 class="collection-header">All Users</h4>
            <router-link v-for="item in allNames" :key="item.id" :to="{ name: 'Profile', params: { user: item } }" class="collection-item" >{{item.name}}</router-link>
        </div>
        <router-view v-else class="col s12"></router-view>
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
