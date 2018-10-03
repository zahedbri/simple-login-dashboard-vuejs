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
      mockAccountDev: {
          role: 'developer',
          username: "dev",
          password: "pass"
      },
      mockAccountAdmin: {
          role: 'admin',
          username: "admin",
          password: "pass"
      }
    }
  }
}

</script>

