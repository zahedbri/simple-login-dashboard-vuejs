<template>
    <div class="profile-page">
        <div class="user-info">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-10 offset-md-1">
                        <img v-bind:src="this.user.avatar" alt="" class="circle responsive-img">
                        <h4>{{this.user.name}}</h4>
                        <p>"Lorem Ipsum Dolores blah blah"</p>
                        <button class="btn">+Follow</button>
                        <hr/>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Profile',
    props: ["user"],
}
</script>

<style>

</style>
