<template>
    <div class="collection with-header">
        <h4 class="collection-header">All Users</h4>
        <a v-on:click="toProfile(item)" class="collection-item" v-for="item in allNames">{{item.name}}</a>
    </div>
</template>

<script>
    export default {
        name: 'ListItems',
        props: ["users"],
        methods: {
            toProfile(item){
                this.$router.push({ name: 'Profile', params: { item: this.item } })
            }
        },
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
