<template>
    <div class="container">
        <div class="collection with-header">
            <h4 class="collection-header">All Users</h4>
            <router-link v-for="item in allNames" :to="{ name: 'Profile', params: { user: item } }" class="collection-item">{{item.name}}</router-link>
        </div>
        <router-view></router-view>
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
