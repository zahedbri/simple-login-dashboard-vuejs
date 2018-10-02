<template>
  <div id="app">
    <router-view/>
  </div>
</template>




<script>
export default {
  name: 'App',
  data(){
    return{
      mockAccount: {
          username: "adnan",
          password: "pass"
      }
    }
  }
}

</script>

